import React from "react";
import { Link } from "gatsby";
import Card from "@material-ui/core/Card";
import Layout from "../components/layout";
import VideoBanner from "../components/VideoBanner";
import styled from "styled-components";

import BlinkingApple from "../images/gifs/blinkeye.bc19101e.gif";
import AppleEating from "../images/gifs/apple-eating.1730e376.gif";
import GrapeParty from "../images/gifs/grape-party.87955635.gif";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  background: red;
  padding: 0;
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

const IndexPage = () => (
  <Layout>
    <VideoBanner />
    {/* How does it work ? */}
    <Container>
      <CardContainer>
        <CardImage src={BlinkingApple} alt="blinking apple gif" />
        <section>
          <h3>Step 1. Browse</h3>
          <p>
            Search for food events near you. We are currently focused on Davis,
            CA but will be expanding to your neighborhood soon.
          </p>
        </section>
      </CardContainer>
      <CardContainer>
        <CardImage src={GrapeParty} alt="grape gif" />
        <section>
          <h3>Step 2. Reserve</h3>
          <p>
            Save a seat and pay by card. It's quick, easy, and totally secure.
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
    </Container>
  </Layout>
);

export default IndexPage;
