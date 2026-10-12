#!/usr/bin/env python3
"""Check every internal href and src in a built site.

Each link must resolve to a file inside the build directory, and a fragment must
match an id on the target page. External and non-http schemes are skipped.

Usage: python3 scripts/check-links.py [dist-dir]
"""

import posixpath
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

SKIPPED_PREFIXES = ("//", "http:", "https:", "mailto:", "tel:", "data:", "javascript:")


class Page(HTMLParser):
    """Collects the links and the ids of one page."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links = []
        self.ids = set()

    def handle_starttag(self, tag, attrs):
        for name, value in attrs:
            if not value:
                continue
            if name == "id":
                self.ids.add(value)
            elif name in ("href", "src"):
                self.links.append(value)


def parse(path):
    page = Page()
    page.feed(path.read_text(encoding="utf-8"))
    page.close()
    return page


def resolve(dist, page_path, target):
    """Map a site path to a file in dist, following the directory build format."""
    if target.startswith("/"):
        base = dist / target.lstrip("/")
    else:
        rel = posixpath.normpath(posixpath.join(page_path.parent.as_posix(), target))
        base = Path(rel)
    if base.is_dir():
        return base / "index.html"
    return base


def main():
    dist = Path(sys.argv[1] if len(sys.argv) > 1 else "dist")
    if not dist.is_dir():
        sys.exit(f"{dist} is not a directory, build the site first")

    pages = sorted(dist.rglob("*.html"))
    cache = {page: parse(page) for page in pages}
    broken = []

    for page_path, page in cache.items():
        for link in page.links:
            if link.startswith(SKIPPED_PREFIXES):
                continue
            parts = urlsplit(link)
            path, fragment = unquote(parts.path), unquote(parts.fragment)
            if not path and not fragment:
                continue

            target = resolve(dist, page_path, path) if path else page_path
            if not target.is_file():
                broken.append(f"{page_path}: {link} -> {target} is missing")
                continue
            if fragment and target.suffix == ".html":
                if fragment not in cache[target].ids:
                    broken.append(f"{page_path}: {link} -> no id '{fragment}' on the page")

    print(f"Checked {len(pages)} page(s) in {dist}/")
    if broken:
        print(f"{len(broken)} broken link(s):")
        for line in broken:
            print(f"  {line}")
        sys.exit(1)
    print("All internal links resolve.")


if __name__ == "__main__":
    main()
