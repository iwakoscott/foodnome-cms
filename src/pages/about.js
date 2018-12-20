import React from 'react';
import Layout from '../components/layout';
import RadishBanner from '../images/other/radish-banner.jpg';
import styled, { keyframes } from 'styled-components';
import { HeroText } from '../components/Text';
import { StaticQuery, graphql } from 'gatsby';
import SignUpBanner from '../components/SignUpBanner';

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
  background: rgba(0, 0, 0, 0.5);
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

const Article = styled.article`
  margin: 1em auto;
  padding: 1em;
  max-width: 750px;
`;

const AnimatedHeroText = styled(HeroText)`
  animation: ${SlideUp} 500ms ease-out;
`;

const SubTitle = styled.h3`
  font-size: ${props => (props.fontSize ? props.fontSize : '2em')};
  color: ${props => (props.color ? props.color : 'black')};
  @media (max-width: 500px) {
    font-size: 1.75em;
  }
`;

const StyledImage = styled.img`
  max-width: 700px;
  width: 100%;
`;

function Image(props) {
  return (
    <div style={{ textAlign: 'center', width: '100%' }}>
      <StyledImage {...props} />
    </div>
  );
}

export default props => (
  <StaticQuery
    query={graphql`
      query getThemeColor {
        site {
          siteMetadata {
            themeColor
          }
        }
      }
    `}
    render={data => (
      <Layout {...props}>
        <div>
          <HeroContainer>
            <PhotoBanner src={RadishBanner} alt="foodnome painting" />
            <Overlay />
            <AnimatedHeroText style={{ position: 'absolute', bottom: 0 }}>
              About <br />
              <br />
              We found our roots in the rich culture of small-town Davis, CA.
            </AnimatedHeroText>
          </HeroContainer>
          <Article>
            <section>
              <SubTitle color={'black'}>Mission Statement</SubTitle>
              <p>
                We believe that every community has a right to
                self-determination, both in terms of economic opportunity and
                access to healthy food. Foodnome aims to empower local home
                cooks to make a living cooking what they love, and connect these
                passionate cooks with their hungry neighbors.
              </p>

              <section>
                <SubTitle color={'black'} fontSize={'1.5em'}>
                  Economic Empowerment
                </SubTitle>
                <ul>
                  <li>
                    The average cost to open a restaurant in California is
                    almost $250,000. Until now, talented cooks lacking these
                    start-up funds have been unable to start a food business.{' '}
                  </li>
                  <li>
                    By pushing for legislative change and creating a home cooked
                    food marketplace, Foodnome aims to enable these aspiring
                    cooks to earn a steady income.
                  </li>
                </ul>
              </section>

              <section>
                <SubTitle color={'black'} fontSize={'1.5em'}>
                  Public Health Improvement
                </SubTitle>
                <ul>
                  <li>
                    In many neighborhoods, fast food is one of the only options
                    for affordable local meals, and community nutrition suffers
                    as a result.{' '}
                  </li>
                  <li>
                    In supporting home restaurant businesses, we strive to
                    expand access to healthy meals in these areas.
                  </li>
                </ul>
              </section>

              <section>
                <SubTitle color={'black'} fontSize={'1.5em'}>
                  Community Building
                </SubTitle>
                <ul>
                  <li>
                    The presence of a select few permitted restaurants limits
                    the potential for neighbors to connect with each other
                    around food. In the case of large restaurant chains, they
                    are often not invested in developing the local community.
                  </li>
                  <li>
                    Home restaurants facilitate face-to-face interactions
                    between neighbors, encouraging cultural exchange, personal
                    connection, and deepening of community bonds. We hope to be
                    a catalyst for building these relationships, and help
                    communities reclaim their food systems.
                  </li>
                </ul>
              </section>
            </section>
            <hr />
            <section>
              <SubTitle color={data.site.siteMetadata.themeColor}>
                Our Story
              </SubTitle>
              <p>
                We found our roots in the rich culture of small-town Davis, CA.
                Here vibrant agricultural innovations and a passion for
                sustainability flow into an imaginative food scene. We strive to
                unearth the underground food movement, uproot traditional food
                systems, and brush the dirt off a homegrown dining experience.
                We want you to be able to go anywhere and be immersed in any
                community through homemade meals. Whether you’re on a distant
                adventure, or just traveling across the street, Foodnome is here
                to bring us together over a dining table.
              </p>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/foodnome-cms.appspot.com/o/approved%2Fimage7.png?alt=media&token=d0715081-0f79-481b-ac37-93a7f1086da7"
                alt="Foodnome Dinner Photo"
              />
              <p>
                Foodnome is about creating community, meeting new people, and
                rethinking food systems to make homemade meals affordable. We’re
                decentralizing the dated food industry and minimizing carbon
                footprints so everyone can afford delicious meals - even the
                planet.
              </p>
            </section>
            <section>
              <SubTitle color={data.site.siteMetadata.themeColor}>
                Why we care
              </SubTitle>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/foodnome-cms.appspot.com/o/approved%2Fimage4.jpg?alt=media&token=057dfb77-5dc8-44dd-a2d8-94f8c5c773ca"
                alt="Serving Food"
              />
              <p>
                Memories are created over the warmth and aroma of a homemade
                meal. What if we could all grab a plate, sit down together and
                share our stories in comfort and nostalgia? We must work to
                uplift and empower those who are at the heart of these feelings,
                so we begin to create a more connected and open world. That's
                why we're supporting local home cooks to take back control from
                the dated food industry by creating their own home restaurants
                and growing healthy communities.
              </p>

              <Image
                src="https://firebasestorage.googleapis.com/v0/b/foodnome-cms.appspot.com/o/approved%2Fimage1.png?alt=media&token=06efa4ee-cb7c-4207-8e8d-d307d3246169"
                alt="Gathering around the Dinner table"
              />
            </section>
            <section>
              <SubTitle color={data.site.siteMetadata.themeColor}>
                The community came together to legalize the sale of homemade
                food
              </SubTitle>
              <p>
                After launching in November 2017, we hosted 45 events with 13
                incredible cooks before receiving a cease and desist order from
                Yolo County in March. But not because our food was bad — because
                it’s delicious — or because people became sick — they didn’t —
                but because of a broken food code regulation system that limits
                legal preparation of food to industrial kitchens. That’s a high
                bar of entry many people can’t afford. At Foodnome, we’re
                committed to fighting this injustice. Which is why we worked
                with the{' '}
                <a
                  rel="noopener noreferrer"
                  target="_BLANK"
                  href="https://www.cookalliance.org/">
                  COOK Alliance
                </a>{' '}
                to pass Assembly Bill 626 and legalize the sale of homemade
                food.
              </p>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/foodnome-cms.appspot.com/o/approved%2Fimage3.png?alt=media&token=5f5f5876-755e-4f98-a926-315b5143c49b"
                alt="Table set for dinner"
              />
              <p>
                The food revolution will be led by those who are least
                represented in food business ownership today: people of color,
                women, disabled people, and immigrants. We believe that
                disproportionately low food business ownership among these
                groups is not due to less great ideas, recipes, and
                entrepreneurs, but to a food regulation system that makes it
                impossible for many of us to even get started. Foodnome is
                committed to promoting food justice, and we are so grateful for
                everyone who stands beside us along the way.
              </p>
            </section>
            <section>
              <SubTitle color={data.site.siteMetadata.themeColor}>
                We are in the middle of a food revolution!
              </SubTitle>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/foodnome-cms.appspot.com/o/approved%2Fimage5.jpg?alt=media&token=a59a285f-9e8e-4b34-bb8a-d53c67731560"
                alt="Group Petitioning"
                maxWidth={700}
              />
              <p>
                On September 18th, Jerry Brown signed{' '}
                <a
                  rel="noopener noreferrer"
                  target="_BLANK"
                  href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201720180AB626">
                  AB-626
                </a>{' '}
                empowering home cooks to sell food out of their own kitchens
                under a new set of regulations.
              </p>
              <p>
                This is great news for cooks and eaters alike. Once the law is
                adopted, tasty tamales are only two houses down and spicy
                samosas are sizzling a street over. Home restaurants are going
                to start popping off county by county, so contact your county
                health official to tell them to approve this bill ASAP!
              </p>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/foodnome-cms.appspot.com/o/approved%2Fimage6.jpg?alt=media&token=b4279157-4e5c-4b99-bb46-92ef93cb59e5"
                alt="AB-626 Bill Press"
              />
              <p>
                As the law catches up with popular demand, Foodnome will be your
                first stop to find decadent local home cooked experiences. Check
                back regularly to find events in your area!
              </p>
              <p>
                Interested in becoming a legal home cook? Foodnome wants to
                help. Contact{' '}
                <a href="mailto:info@foodnome.com">info@foodnome.com </a> for
                more information on getting started.
              </p>
              <p>Happy local munching!</p>
            </section>
          </Article>
          <SignUpBanner location={props.location} />
        </div>
      </Layout>
    )}
  />
);
