import React from 'react';
import Layout from '../components/layout';
import RadishBanner from '../images/other/radish-banner.jpg';
import styled, { keyframes } from 'styled-components';
import { HeroText } from '../components/Text';
import { Slide } from '@material-ui/core';

const SlideUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(100%);
    }

    to {
        opacity: 1;
        transform: translateY(0%);
    }
`;

const PhotoBanner = styled.img`
  object-fit: cover;
  object-position: center;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;

const Overlay = styled.div`
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const Article = styled.article`
  margin: 1em auto;
  padding: 0 1em;
  max-width: 750px;
`;

const AnimatedHeroText = styled(HeroText)`
  animation: ${SlideUp} 300ms ease-out;
`;

export default props => (
  <Layout {...props}>
    <div>
      <HeroContainer>
        <PhotoBanner src={RadishBanner} alt="foodnome painting" />
        <Overlay />
        <AnimatedHeroText
          className=""
          style={{ position: 'absolute', bottom: 0 }}>
          Our Story <br />
          <br />
          We found our roots in the rich culture of small-town Davis, CA.
        </AnimatedHeroText>
      </HeroContainer>
      <Article>
        <section>
          <p>
            Here vibrant agricultural innovations and a passion for
            sustainability flow into an imaginative food scene. We strive to
            unearth the underground food movement, uproot traditional food
            systems, and brush the dirt off a homegrown dining experience. We
            want you to be able to go anywhere and be immersed in any community
            through homemade meals. Whether you’re on a distant adventure, or
            just traveling across the street, Foodnome is here to bring us
            together over a dining table.
          </p>
          <p>
            Foodnome is about creating community, meeting new people, and
            rethinking food systems to make homemade meals affordable. We’re
            decentralizing the dated food industry and minimizing carbon
            footprints so everyone can afford delicious meals - even the planet.
          </p>
        </section>
        <section>
          <h3>Why we care</h3>
          <p>
            Memories are created over the warmth and aroma of a homemade meal.
            What if we could all grab a plate, sit down together and share our
            stories in comfort and nostalgia? We must work to uplift and empower
            those who are at the heart of these feelings, so we begin to create
            a more connected and open world. That's why we're supporting local
            home cooks to take back control from the dated food industry by
            creating their own home restaurants and growing healthy communities.
          </p>
        </section>
        <section>
          <h3>
            The Community Came Together to Legalize the Sale of Homemade Food
          </h3>
          <p>
            After launching in November 2017, we hosted 45 events with 13
            incredible cooks before receiving a cease and desist order from Yolo
            County in March. But not because our food was bad — because it’s
            delicious — or because people became sick — they didn’t — but
            because of a broken food code regulation system that limits legal
            preparation of food to industrial kitchens. That’s a high bar of
            entry many people can’t afford. At Foodnome, we’re committed to
            fighting this injustice. Which is why we helped pass Assembly Bill
            626.
          </p>
        </section>
        <section>
          <h3>We are in the middle of a food revolution!</h3>
          <p>
            We are in the middle of a food revolution! On September 18th, Jerry
            Brown signed a law empowering home cooks to sell food out of their
            own kitchens under a new set of regulations.
          </p>
          <p>
            This is great news for cooks and eaters alike. Once the law is
            adopted, tasty tamales are only two houses down and spicy samosas
            are sizzling a street over. Home restaurants are going to start
            popping off county by county, so contact your county health official
            to tell them to approve this bill ASAP!
          </p>
          <p>
            As the law catches up with popular demand, Foodnome will be your
            first stop to find decadent local home cooked experiences. Check
            back regularly to find events in your area!
          </p>
          <p>
            Interested in becoming a legal home cook? Foodnome wants to help.
            Contact <a href="mailto:info@foodnome.com">info@foodnome.com </a>{' '}
            for more information on getting started.
          </p>
          <p>Happy local munching!</p>
        </section>
      </Article>
    </div>
  </Layout>
);
