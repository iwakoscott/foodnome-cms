import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';

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
  padding: 1.6em 0 2em;
  width: 100%;
  background: rgb(129, 54, 98);
  background: linear-gradient(
    0deg,
    rgba(129, 54, 98, 1) 31%,
    rgba(172, 42, 119, 1) 60%,
    rgba(236, 0, 140, 1) 100%
  );
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1em;
`;

const PressContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  justify-items: center;
  grid-gap: 1em;
  width: 100%;
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
