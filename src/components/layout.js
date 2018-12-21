import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';
import Footer from './footer';

const Layout = ({ children, ...rest }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            themeColor
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={'Foodnome - Dig in to the Food Underground'}
          meta={[
            {
              name: 'description',
              content:
                'A collective of Home Restaurants serving the community delicious homemade meals.',
            },
            {
              name: 'keywords',
              content:
                'home restaurants, ab626, cook, meals, meal, dish, dishes, dine, dining, dinner, lunch, breakfast',
            },
          ]}
        >
          <html lang="en" />
          <title>Foodnome - Dig in to the Food Underground</title>
          <meta
            name="description"
            content="A collective of Home Restaurants serving the community delicious homemade meals. Come grab a plate!"
          />
          <meta
            name="keywords"
            content="home restaurants, ab626, food, cook, meals, meal, dish, dishes, dine, dining, dinner, lunch, breakfast"
          />
          <meta name="application-name" content="Foodnome" />
          <meta name="theme-color" content="#e162f8" />

          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://www.foodnome.com/" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta
            property="og:description"
            content="A collective of Home Restaurants serving the community delicious homemade meals."
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/foodnome/image/upload/v1545290031/radish-banner.jpg"
          />
          <meta
            property="og:image:url"
            content="https://res.cloudinary.com/foodnome/image/upload/v1545290031/radish-banner.jpg"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:description"
            content="A collective of Home Restaurants serving the community delicious homemade meals."
          />
          <meta
            property="twitter:title"
            content={data.site.siteMetadata.title}
          />
          <meta
            property="twitter:image"
            content="https://res.cloudinary.com/foodnome/image/upload/v1545290031/radish-banner.jpg"
          />
        </Helmet>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            width: '100%',
          }}
        >
          <Header
            siteTitle={data.site.siteMetadata.title}
            themeColor={data.site.siteMetadata.themeColor}
            {...rest}
          />
          <div>{children}</div>
          <Footer themeColor={data.site.siteMetadata.themeColor} {...rest} />
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
