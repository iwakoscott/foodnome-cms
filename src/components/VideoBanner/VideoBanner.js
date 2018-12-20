import React from 'react';
import styled from 'styled-components';
import BannerVideo from '../../images/other/website-header.mp4';
import FallbackImage from '../../images/other/fallback.png';
import Button from '@material-ui/core/Button';
import './VideoBanner.css';
import { FaChevronCircleRight } from 'react-icons/fa';
import { Link } from 'gatsby';
import FoodnomeCarrot from '../../images/logos/FoodnomeCarrot_IconOnly_White_TransparentBG_small.png';
import { HeroTextContainer } from '../Containers';
import { HeroText } from '../Text';

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

  &::-webkit-media-controls-overlay-play-button {
    display: none !important;
    -webkit-appearance: none;
  }

  &::-webkit-media-controls-panel {
    display: none !important;
    -webkit-appearance: none;
  }

  &::-webkit-media-controls-play-button {
    display: none !important;
    -webkit-appearance: none;
  }

  &::-webkit-media-controls-start-playback-button {
    display: none !important;
    -webkit-appearance: none;
  }
`;

const ButtonText = styled.span`
  padding: 0;
  margin: 0;
  color: white;
  font-size: 2em;
  border-color: white !important;

  @media (max-width: 620px), (max-height: 500px) {
    font-size: 1.5em;
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
      <img src={FallbackImage} alt="Foodnome Dinner Event" />
    </Video>
    <HeroTextContainer>
      <HeroText className="video-banner-text">
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
            style={{ margin: '0.5rem', borderColor: 'white' }}
            variant="outlined"
            size="large"
            component={Link}
            to="/about"
          >
            <ButtonText>About Us</ButtonText>
            <FaChevronCircleRight color={'white'} style={{ margin: '.5rem' }} />
          </Button>
        </div>
      </HeroText>
    </HeroTextContainer>
  </VideoContainer>
);
