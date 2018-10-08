module.exports = {
  siteMetadata: {
    title: "Foodnome",
    themeColor: "#ec008c",
    facebookURL: "https://www.facebook.com/Foodnome/",
    pinterestURL: "https://www.pinterest.com/foodnome/pins/",
    instagramURL: "https://www.instagram.com/foodnome/",
    pressLogos: [
      {
        width: 256,
        height: 32.1,
        imageURL:
          "https://firebasestorage.googleapis.com/v0/b/foodnome.appspot.com/o/assets%2Fpress%2Flatimes.png?alt=media&token=7965d9d9-a2a4-45e7-80bb-6e63cb6c6c65",
        alt: "LA Times Logo",
        linkURL:
          "http://www.latimes.com/politics/essential/la-pol-ca-essential-politics-may-2018-selling-home-cooked-food-will-no-longer-1537315214-htmlstory.html"
      },
      {
        width: 256,
        height: 34.2,
        imageURL:
          "https://firebasestorage.googleapis.com/v0/b/foodnome.appspot.com/o/assets%2Fpress%2Fmunchies.png?alt=media&token=ea283620-4e00-44bd-8bf7-cc0e773cde9c",
        alt: "Vice Munchies Logo",
        linkURL:
          "https://munchies.vice.com/en_us/article/kzyjzv/inside-the-fight-to-sell-home-cooked-food-in-california?utm_campaign=sharebutton"
      },
      {
        width: 256,
        height: 59,
        imageURL:
          "https://firebasestorage.googleapis.com/v0/b/foodnome.appspot.com/o/assets%2Fpress%2Fsandiegouniontribune.png?alt=media&token=3847f69b-21a7-4871-a09d-29bc41d8ff12",
        alt: "San Diego Union Tribune Logo",
        linkURL:
          "http://www.sandiegouniontribune.com/la-pol-ca-essential-politics-may-2018-selling-home-cooked-food-will-no-longer-1537315214-htmlstory.html"
      },
      {
        width: 256,
        height: 78.1,
        imageURL:
          "https://firebasestorage.googleapis.com/v0/b/foodnome.appspot.com/o/assets%2Fpress%2FCBS.png?alt=media&token=503002e0-1ce5-4bbd-8379-8784c4bd5e1e",
        alt: "CBS Logo",
        linkURL:
          "https://sacramento.cbslocal.com/2018/08/22/home-cooks-selling-food-online/"
      },
      {
        width: 256,
        height: 95.7,
        imageURL:
          "https://firebasestorage.googleapis.com/v0/b/foodnome.appspot.com/o/assets%2Fpress%2Fabc10.png?alt=media&token=a1c665d6-f46b-4523-9565-0c3add464974",
        alt: "ABC 10 Logo",
        linkURL:
          "https://www.abc10.com/article/news/local/proposed-california-law-would-let-people-sell-food-cooked-in-home-kitchens/103-586717946"
      },
      {
        width: 256,
        height: 33.9,
        imageURL:
          "https://firebasestorage.googleapis.com/v0/b/foodnome.appspot.com/o/assets%2Fpress%2Fdailydemocrat.png?alt=media&token=63b332f0-2f97-49da-ac7e-c495f53d46df",
        alt: "Daily Democrat Logo",
        linkURL:
          "https://www.dailydemocrat.com/2018/03/08/yolo-county-shuts-down-crowdfunded-dinners-in-davis/"
      },
      {
        width: 256,
        height: 128.6,
        imageURL:
          "https://firebasestorage.googleapis.com/v0/b/foodnome.appspot.com/o/assets%2Fpress%2Fthenewfoodeconomy.png?alt=media&token=42e8e6eb-3e20-4cc8-ab43-fb23ab1fa967",
        alt: "The New Food Economy Logo",
        linkURL:
          "https://newfoodeconomy.org/california-homemade-food-operations-act-2018/"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui"
        // icon: "src/images/gatsby-icon.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Varela Round", "Montserrat"]
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      }
    },
    `gatsby-plugin-styled-components`
  ]
};
