/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Martin Chammah | FullStack Developer',
    author: 'Martin Chammah',
    siteUrl: `https://www.martinchammah.dev`
  },
  pathPrefix: '/personal-portfolio-gatsby',
  plugins: [{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: path.join(__dirname, `src`, `images`),
    },
    
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `thumbs`,
      path: path.join(__dirname, `src`, `blog`,`thumbs`),
    },
    
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `uses`,
      path: path.join(__dirname, `src`, `uses`),
    },
    
  },
  `gatsby-plugin-sass`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'src',
      path: `${__dirname}/src/`
    }
  },
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        'gatsby-remark-relative-images',
        `gatsby-remark-copy-linked-files`,
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 750,
            linkImagesToOriginal: false
          }
        },
        {
          resolve: `gatsby-remark-copy-linked-files`,
          options: {
            destinationDir: `path/to/dir`,
            ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
          }
        }
      ]
    }
}

]
}
