import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";
import Footer from "./footer";

const Layout = ({ children, location }) => (
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
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}>
          <html lang="en" />
        </Helmet>
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
          <Header
            siteTitle={data.site.siteMetadata.title}
            themeColor={data.site.siteMetadata.themeColor}
          />
          <div
            style={{
              margin: "0 auto",
              paddingTop: 0
            }}>
            {children}
          </div>
          <Footer
            location={location}
            themeColor={data.site.siteMetadata.themeColor}
          />
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
