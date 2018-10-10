import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  ${props =>
    props.themeColor &&
    css`
      background: ${props.themeColor};
    `};
`;

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 0 0 2em;
  max-width: 600px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const PressContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  padding: 2em 0;
`;

const PressLogo = styled.img`
  margin: 1em;
`;

const PressLogoLink = styled.a`
  text-decoration: none;
`;

function Press({ imageURL, width, height, alt, linkURL }) {
  return (
    <PressLogoLink href={linkURL} rel="noopener noreferrer" target="_BLANK">
      <PressLogo width={width} height={height} src={imageURL} alt={alt} />
    </PressLogoLink>
  );
}

export default ({ themeColor, location }) => (
  <div>
    <Footer themeColor={themeColor}>
      <StaticQuery
        query={graphql`
          query SitePressLogos {
            site {
              siteMetadata {
                pressLogos {
                  width
                  height
                  imageURL
                  alt
                  linkURL
                }
              }
            }
          }
        `}
        render={data => (
          <PressContainer>
            {data.site.siteMetadata.pressLogos.map((press, index) => (
              <Press key={index} {...press} />
            ))}
          </PressContainer>
        )}
      />
      <LinksContainer>
        <StyledLink state={{ from: location.pathname }} to="/privacy">
          Privacy
        </StyledLink>
        <StyledLink state={{ from: location.pathname }} to="/tos">
          Terms of Service
        </StyledLink>
        <StyledLink state={{ from: location.pathname }} to="/contact-us">
          Contact Us
        </StyledLink>
      </LinksContainer>
    </Footer>
  </div>
);
