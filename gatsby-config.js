const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.example.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: 'Foodnome',
    themeColor: '#ec008c',
    email: 'info@foodnome.com',
    siteUrl,
    facebookURL: 'https://www.facebook.com/Foodnome/',
    pinterestURL: 'https://www.pinterest.com/foodnome/pins/',
    instagramURL: 'https://www.instagram.com/foodnome/',
    linkedInURL: 'https://www.linkedin.com/company/18274627/',
    pressLogos: [
      {
        width: 256,
        height: 87.88,
        imageURL:
          'https://firebasestorage.googleapis.com/v0/b/foodnome-cms.appspot.com/o/logos%2Fpress%2Fnpr.png?alt=media&token=6520da11-eccf-4a4d-ba7d-1bc037428810',
        alt: 'NPM CapRadio',
        linkURL:
          'http://www.capradio.org/articles/2018/12/21/if-counties-get-on-board-selling-food-from-your-own-kitchen-could-become-legal-in-california/?fbclid=IwAR3fVTYNWg0UOwN2SGWcobbRXxVXn1aPx52uoXhxd8FvSWjc6PIAAL0TPGg'
      },
      {
        width: 256,
        height: 32.1,
        imageURL:
          'https://firebasestorage.googleapis.com/v0/b/foodnome-cms.appspot.com/o/logos%2Fpress%2Flatimes.png?alt=media&token=338a7cc5-9d69-4ebd-8719-699360dc7f4a',
        alt: 'LA Times Logo',
        linkURL:
          'http://www.latimes.com/politics/essential/la-pol-ca-essential-politics-may-2018-selling-home-cooked-food-will-no-longer-1537315214-htmlstory.html'
      },
      {
        width: 256,
        height: 34.2,
        imageURL:
          'https://firebasestorage.googleapis.com/v0/b/foodnome-cms.appspot.com/o/logos%2Fpress%2Fmunchies.png?alt=media&token=bc7c32f8-4a47-48ac-9d0c-c51971ef4754',
        alt: 'Vice Munchies Logo',
        linkURL:
          'https://munchies.vice.com/en_us/article/kzyjzv/inside-the-fight-to-sell-home-cooked-food-in-california?utm_campaign=sharebutton'
      },
      {
        width: 256,
        height: 59,
        imageURL:
          'https://firebasestorage.googleapis.com/v0/b/foodnome-cms.appspot.com/o/logos%2Fpress%2Fsandiegouniontribune.png?alt=media&token=2b89bb99-9795-4df5-a84c-d6d16c8e64f0',
        alt: 'San Diego Union Tribune Logo',
        linkURL:
          'http://www.sandiegouniontribune.com/la-pol-ca-essential-politics-may-2018-selling-home-cooked-food-will-no-longer-1537315214-htmlstory.html'
      },
      {
        width: 256,
        height: 78.1,
        imageURL:
          'https://firebasestorage.googleapis.com/v0/b/foodnome-cms.appspot.com/o/logos%2Fpress%2FCBS.png?alt=media&token=d42c3b9a-2c21-483d-aaad-8ae5b70159c3',
        alt: 'CBS Logo',
        linkURL:
          'https://sacramento.cbslocal.com/2018/08/22/home-cooks-selling-food-online/'
      },
      {
        width: 256,
        height: 95.7,
        imageURL:
          'https://firebasestorage.googleapis.com/v0/b/foodnome-cms.appspot.com/o/logos%2Fpress%2Fabc10.png?alt=media&token=44be7f03-03e1-4cd4-b3ba-5e29221d1c7e',
        alt: 'ABC 10 Logo',
        linkURL:
          'https://www.abc10.com/article/news/local/proposed-california-law-would-let-people-sell-food-cooked-in-home-kitchens/103-586717946'
      },
      {
        width: 256,
        height: 33.9,
        imageURL:
          'https://firebasestorage.googleapis.com/v0/b/foodnome-cms.appspot.com/o/logos%2Fpress%2Fdailydemocrat.png?alt=media&token=95c7890d-1ab7-44ca-895c-cb3ebb40a22c',
        alt: 'Daily Democrat Logo',
        linkURL:
          'https://www.dailydemocrat.com/2018/03/08/yolo-county-shuts-down-crowdfunded-dinners-in-davis/'
      },
      {
        width: 256,
        height: 128.6,
        imageURL:
          'https://firebasestorage.googleapis.com/v0/b/foodnome-cms.appspot.com/o/logos%2Fpress%2Fthenewfoodeconomy.png?alt=media&token=0c3ca1fa-eca7-47c8-8b6d-45b95d393e26',
        alt: 'The New Food Economy Logo',
        linkURL:
          'https://newfoodeconomy.org/california-homemade-food-operations-act-2018/'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-favicon`,
    `@wapps/gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: 'markdown-pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590
            }
          }
        ]
      }
    },
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Foodnome',
        short_name: 'Foodnome',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399'
        // icon: "src/images/gatsby-icon.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Varela Round', 'Montserrat']
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    }
  ]
};
