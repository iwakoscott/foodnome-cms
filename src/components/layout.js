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
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'A collective of Home Restaurants serving the community delicious homemade meals.'
            },
            {
              name: 'keywords',
              content:
                'home restaurants, food, cook, meals, meal, dish, dishes, dine, dining, dinner, lunch, breakfast'
            }
          ]}>
          <html lang="en" />
        </Helmet>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
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
  children: PropTypes.node.isRequired
};

export default Layout;
