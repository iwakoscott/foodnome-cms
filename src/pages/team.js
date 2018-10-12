import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { graphql, StaticQuery } from 'gatsby';

const getTeamMembers = () => [
  {
    name: 'Akshay Prabhu',
    title: 'Founder',
    description:
      'Advocate for food justice & homegrown dining with a love for Cooking and the food underground',
    photoURL:
      'https://firebasestorage.googleapis.com/v0/b/foodnome-cms.appspot.com/o/teams%2Fhead-shots%2Fakshay_prabhu.jpeg?alt=media&token=3bc3b375-4454-40e2-8f15-cbd90b4923ef',
    linkedinURL: 'https://www.linkedin.com/in/akshay-prabhu-9b1549bb/'
  },
  {
    name: 'Scott Iwako',
    title: 'Frontend Developer',
    description:
      "Son of a Chef. I have an insatiable hunger to build for the web and my mom's Ramen. 🍜",
    photoURL:
      'https://firebasestorage.googleapis.com/v0/b/foodnome-cms.appspot.com/o/teams%2Fhead-shots%2Fscott_iwako.jpg?alt=media&token=1da4f594-218a-4fd9-b3ae-3e6ab625df00',
    linkedinURL: 'https://www.linkedin.com/in/iwakoscott/',
    twitterURL: 'https://twitter.com/theisomorphic'
  },
  {
    name: 'Hank Teicheira',
    title: 'Fullstack Developer',
    description:
      'Farmer and Winemaker converted his passion to tech to change the food system in a larger way',
    photoURL:
      'https://firebasestorage.googleapis.com/v0/b/foodnome-cms.appspot.com/o/teams%2Fhead-shots%2Fhank_teicheira.jpeg?alt=media&token=a676a3cd-040b-48a7-b0d7-cdca5f9a714f',
    linkedinURL: 'https://www.linkedin.com/in/hteicheira/'
  }
];

const Deck = styled.div`
  padding: 0;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledCard = styled(Card)`
  width: 20rem;
  padding: 1em;
  margin: 1em 0;
  display: flex;
  flex-direction: column;
`;

const ProfilePhoto = styled.img`
  border-radius: 100%;
  height: 200px;
  width: 200px;
  align-self: center;
  border-style: inset;
`;

const Name = styled.h2`
  text-align: center;
`;

const JobTitle = styled.h4`
  text-align: center;
`;

const SocialMediaContainer = styled.div`
  max-width: 15rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1em;
  align-self: center;
`;

const ProfileDescription = styled.p`
  margin: 0;
  padding: 0;
`;

const SocialMediaLink = styled.a`
  color: ${props => props.color || 'black'};
  text-decoration: none;
`;

export default props => (
  <Layout {...props}>
    <div
      style={{
        margin: '56px 0',
        padding: '1em',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
      <h1 style={{ alignSelf: 'center', margin: '1em 0' }}>Meet the team!</h1>
      <StaticQuery
        query={graphql`
          query themeColorQuery {
            site {
              siteMetadata {
                themeColor
              }
            }
          }
        `}
        render={data => (
          <Deck>
            {getTeamMembers().map(profile => (
              <StyledCard key={profile.name}>
                <ProfilePhoto src={profile.photoURL} />
                <Name>{profile.name}</Name>
                <JobTitle>{profile.title}</JobTitle>
                <SocialMediaContainer>
                  {profile.linkedinURL && (
                    <SocialMediaLink
                      color={data.site.siteMetadata.themeColor}
                      rel="noopener noreferrer"
                      target="_BLANK"
                      href={profile.linkedinURL}>
                      <FaLinkedin size={20} />
                    </SocialMediaLink>
                  )}
                  {profile.twitterURL && (
                    <SocialMediaLink
                      color={data.site.siteMetadata.themeColor}
                      rel="noopener noreferrer"
                      target="_BLANK"
                      href={profile.twitterURL}>
                      <FaTwitter size={20} />
                    </SocialMediaLink>
                  )}
                </SocialMediaContainer>
                <ProfileDescription>{profile.description}</ProfileDescription>
              </StyledCard>
            ))}
          </Deck>
        )}
      />
    </div>
  </Layout>
);
