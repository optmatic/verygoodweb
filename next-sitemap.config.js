/** @type {import('next-sitemap').IConfig} */
module.exports = {
    // Your website's URL
    siteUrl: process.env.SITE_URL || 'https://optmatic.com',
    // How often search engines should crawl your site
    changefreq: 'daily',
    // Priority of your pages (between 0 and 1)
    priority: 0.7,
    // Generate a robots.txt file
    generateRobotsTxt: true,
    // Default transformation function for each URL
    transform: async (config, path) => {
      return {
        loc: path, // location of page
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: new Date().toISOString(),
      }
    },
    // Additional robot.txt rules
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
  }
  