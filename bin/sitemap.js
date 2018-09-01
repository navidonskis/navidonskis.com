// https://www.npmjs.com/package/sitemap-generator
const SitemapGenerator = require('sitemap-generator');
// create generator
const generator = SitemapGenerator('https://www.navidonskis.com', {
  stripQuerystring: false,
  filepath: './bin/sitemap.xml',
});

generator.on('done', () => console.log('Generated !'));
// start the crawler
generator.start();
