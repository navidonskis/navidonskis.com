import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, postUrl } from '../lib/posts';
import { site } from '../site.config';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  const base = context.site ?? new URL(site.url);

  return rss({
    title: `${site.name}: writing`,
    description: site.description,
    site: base,
    trailingSlash: true,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postUrl(post),
      categories: post.data.tags,
      // Full post body as rendered HTML. Falls back to the description for
      // formats the loader does not pre-render (MDX with components).
      content: absolutizeLinks(post.rendered?.html ?? post.data.description, base),
    })),
    customData: `<language>en-gb</language>`,
  });
}

/** Feed readers show the HTML out of context, so root-relative links must be absolute. */
function absolutizeLinks(html: string, base: URL): string {
  return html.replace(/(href|src)="\/(?!\/)/g, `$1="${base.origin}/`);
}
