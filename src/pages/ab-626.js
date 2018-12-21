import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import AB626 from '../images/other/ab626.jpg';
import Snippet1 from '../images/other/snippet-1.jpg';
import Snippet2 from '../images/other/snippet-2.jpg';
import { Helmet } from 'react-helmet';

const HeroContainer = styled.div`
  height: 75vh;
  background: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  overflow: hidden;
`;

const HeroOverlay = styled.div`
  position: relative;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  overflow: hidden;
`;

const HeroText = styled.h1`
  text-align: center;
  position: absolute;
  color: white;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 2em;
`;

const TitleBox = styled.div`
  min-width: 120px;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.75em;
`;

const ParagraphBox = styled.div`
  max-width: 600px;
  padding: 1em;
`;

const ImageSnippet = styled.div`
  height: 50vh;
  width: 100%;
  background: url(${props => props.src});
  background-position: ${props => props.position};
  background-size: cover;
`;
const keywords = [
  'Assembly Bill 626',
  'AB-626',
  'Jerry Brown',
  'California',
  'home restaurants',
  'food',
  'dish',
  'dishes',
  'dining',
  'dinner',
  'lunch',
  'breakfast',
  'dessert',
  'Bill',
  'bill',
  'ab-626',
  'ab626',
  'Governor',
  'meals',
  'legal',
  'Davis',
];

export default props => (
  <Layout {...props}>
    <Helmet>
      <meta name="keywords" content={keywords.join(', ')} />
      <title>Foodnome - Assembly Bill 626</title>
    </Helmet>
    <HeroContainer src={AB626}>
      <HeroOverlay>
        <HeroText>
          Assembly Bill 626: <br /> Legalizing Home Restaurants
        </HeroText>
      </HeroOverlay>
    </HeroContainer>
    <div>
      <Row>
        <TitleBox>
          <Title>History</Title>
        </TitleBox>
        <ParagraphBox>
          <p>
            Home restaurants were legalized in the state of California in
            September 2018, after the passing of Assembly Bill 626 (AB 626). The
            bill’s main two sponsors included{' '}
            <a
              target="_BLANK"
              rel="noopener noreferrer"
              href="https://a56.asmdc.org/"
            >
              Eduardo Garcia
            </a>{' '}
            (CA District 56 Assemblyman) and the nonprofit{' '}
            <a
              target="_BLANK"
              rel="noopener noreferrer"
              href="https://www.cookalliance.org/"
            >
              COOK Alliance
            </a>{' '}
            (Creating Opportunity, Opening Kitchens). AB 626 is an extension of
            the California Homemade Food Act (AB 1616), which allows people to
            make and sell certain “low risk” food products such as jam and other
            non-perishable foods. AB 626 expands the list of allowable foods to
            include all but a few foods, now making it possible for people to
            open legal restaurants in their home.
          </p>
        </ParagraphBox>
      </Row>

      <ImageSnippet src={Snippet1} position={'center center'} />

      <Row>
        <TitleBox>
          <Title>Opportunity</Title>
        </TitleBox>
        <ParagraphBox>
          <p>
            Until now, starting a restaurant has required a lot of money. This
            large barrier to entry has excluded thousands of passionate cooks
            from starting a food business. By eliminating these high start up
            costs, AB 626 brings economic opportunities back to the people,
            allowing folks to make their own menus, work their own hours, and
            earn a steady income. Opening this new food marketplace will spur
            real economic growth throughout the state of California,
            particularly in areas with limited job opportunities.
          </p>
        </ParagraphBox>
      </Row>

      <ImageSnippet src={Snippet2} position={'center 75%'} />

      <Row>
        <TitleBox>
          <Title>Specifics</Title>
        </TitleBox>
        <ParagraphBox>
          <p>
            AB 626 sets guidelines on how a home restaurant cooks and sells
            food:
          </p>
          <ul>
            <li>
              Food is prepared, cooked, and served or delivered on the same day.
            </li>
            <li>
              Food sales are limited to 30 meals per day or 60 meals per week
              (or equivalent meal components)
            </li>
            <li>
              The restaurant has no more than $50,000 verifiable gross annual
              sales (adjusted annually for inflation).
            </li>
          </ul>
          <p>
            To read the full text of the bill,{' '}
            <a
              href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201720180AB626"
              target="_BLANK"
              rel="noopener noreferrer"
            >
              Click Here
            </a>
            .
          </p>
        </ParagraphBox>
      </Row>
    </div>
  </Layout>
);
