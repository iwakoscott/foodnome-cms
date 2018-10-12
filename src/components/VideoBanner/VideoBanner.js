import React from 'react';
import styled from 'styled-components';
import BannerVideo from '../../images/other/website-header.mp4';
import FallbackImage from '../../images/other/fallback.png';
import Button from '@material-ui/core/Button';
import './VideoBanner.css';
import { FaChevronCircleRight } from 'react-icons/fa';
import { Link } from 'gatsby';
import FoodnomeCarrot from '../../images/logos/FoodnomeCarrot_IconOnly_White_TransparentBG_small.png';

const VideoContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const Video = styled.video`
  object-fit: cover;
  height: 100vh;
  width: 100%;
`;

const HeroText = styled.h2`
  color: white;
  font-size: 3em;
  max-width: 950px;
  margin: 0.5em;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  @media (max-width: 500px), (max-height: 500px) {
    font-size: 1.75em;
  }
`;

const HeroTextContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const ButtonText = styled.span`
  padding: 0;
  margin: 0;
  color: white;
  font-size: 2em;

  @media (max-width: 500px), (max-height: 500px) {
    font-size: 1em;
  }
`;

export default () => (
  <VideoContainer>
    <Video
      loop={true}
      muted={true}
      playsinline={true}
      autoPlay={true}
      poster={FallbackImage}
      // preload={"true"}
    >
      <source src={BannerVideo} type="video/mp4" />
      <img src={FallbackImage} />
    </Video>
    <HeroTextContainer>
      <HeroText>
        <img
          width={100}
          height={100}
          src={FoodnomeCarrot}
          alt="Foodnome Carrot"
        />
        <div>
          {`A collective of Home Restaurants serving the community delicious homemade meals. Come grab a plate!`}
        </div>
        <div style={{ float: 'right' }}>
          <Button
            style={{ margin: '0.5rem' }}
            variant="outlined"
            size="large"
            component={Link}
            to="/404">
            <ButtonText>Read our story</ButtonText>
            <FaChevronCircleRight color={'white'} style={{ margin: '.5rem' }} />
          </Button>
        </div>
      </HeroText>
    </HeroTextContainer>
  </VideoContainer>
);
