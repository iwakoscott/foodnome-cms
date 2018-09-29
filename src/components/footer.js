import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 1.5em;
  ${props =>
    props.themeColor &&
    css`
      background: ${props.themeColor};
    `};
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 600px;
  width: 100%;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export default ({ location, themeColor }) => (
  <Footer themeColor={themeColor}>
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
);
