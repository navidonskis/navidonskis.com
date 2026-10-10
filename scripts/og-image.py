#!/usr/bin/env python3
"""Generate public/og-default.png: 1200x630, ink background, white title.

Uses Arial Narrow Bold (the display font's fallback) so the image can be
rebuilt on any Mac without installing IBM Plex. Run: python3 scripts/og-image.py
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "og-default.png"

INK = (14, 31, 47)
WHITE = (255, 255, 255)
ON_INK_2 = (197, 206, 214)
ACCENT = (11, 107, 79)

DISPLAY = "/System/Library/Fonts/Supplemental/Arial Narrow Bold.ttf"
SANS = "/System/Library/Fonts/Supplemental/Arial.ttf"

W, H = 1200, 630
PAD = 80

img = Image.new("RGB", (W, H), INK)
d = ImageDraw.Draw(img)

title_font = ImageFont.truetype(DISPLAY, 104)
sub_font = ImageFont.truetype(SANS, 36)
small_font = ImageFont.truetype(SANS, 28)

# Accent rule, like the 3px card rule in the design.
d.rectangle([PAD, PAD, PAD + 120, PAD + 6], fill=ACCENT)

d.text((PAD - 4, PAD + 50), "Donatas Navidonskis", font=title_font, fill=WHITE)

subtitle = [
    "Cloud cost, platform engineering and system design",
    "on Google Cloud, from someone who runs it in production.",
]
y = PAD + 200
for line in subtitle:
    d.text((PAD, y), line, font=sub_font, fill=ON_INK_2)
    y += 50

d.text((PAD, H - PAD - 34), "navidonskis.com", font=small_font, fill=WHITE)

OUT.parent.mkdir(parents=True, exist_ok=True)
img.save(OUT, "PNG", optimize=True)
print(f"wrote {OUT.relative_to(ROOT)} ({OUT.stat().st_size // 1024} KB)")
