import React from "react";
import { Link } from "gatsby";
import Card from "@material-ui/core/Card";
import Layout from "../components/layout";
import VideoBanner from "../components/VideoBanner";
import styled, { css } from "styled-components";
import { StaticQuery, graphql } from "gatsby";

import BlinkingApple from "../images/gifs/blinkeye.bc19101e.gif";
import AppleEating from "../images/gifs/apple-eating.1730e376.gif";
import GrapeParty from "../images/gifs/grape-party.87955635.gif";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${props =>
    props.backgroundColor &&
    css`
      background-color: #ffffff;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23${props.backgroundColor.replace(
        "#",
        ""
      )}' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    `};
`;

const CardImage = styled.img`
  max-width: 250px;
`;

const CardContainer = styled(Card)`
  margin: 1em;
  padding: 1em;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Deck = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  text-align: center;
  margin-bottom: 44px;
`;

const Title = styled.h2`
  font-size: 2em;
  margin: 1rem;
  color: #2f3640;
  text-decoration: underline;
  @media (max-width: 400px), (max-height: 400px) {
    font-size: 1.5em;
  }
`;

const IndexPage = ({ navigate, location }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            themeColor
          }
        }
      }
    `}
    render={data => (
      <Layout location={location}>
        <VideoBanner navigate={navigate} />
        {/* How does it work ? */}
        <Container backgroundColor={data.site.siteMetadata.themeColor}>
          <Title>How it works</Title>
          <Deck>
            <CardContainer>
              <CardImage src={BlinkingApple} alt="blinking apple gif" />
              <section>
                <h3>Step 1. Browse</h3>
                <p>
                  Search for food events near you. We are currently focused on
                  Davis, CA but will be expanding to your neighborhood soon.
                </p>
              </section>
            </CardContainer>
            <CardContainer>
              <CardImage src={GrapeParty} alt="grape gif" />
              <section>
                <h3>Step 2. Reserve</h3>
                <p>
                  Save a seat and pay by card. It's quick, easy, and totally
                  secure.
                </p>
              </section>
            </CardContainer>
            <CardContainer>
              <CardImage src={AppleEating} alt="appple eating gif" />
              <section>
                <h3>Step 3. Enjoy</h3>
                <p>Eat bomb food with your friends and neighbors.</p>
              </section>
            </CardContainer>
          </Deck>
        </Container>
      </Layout>
    )}
  />
);

export default IndexPage;
