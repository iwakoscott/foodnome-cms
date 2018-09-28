import React from "react";
import styled from "styled-components";
import BannerVideo from "../../images/other/website-header.mp4";
import BannerVideoStill from "../../images/other/banner-video-still.png";
import "./VideoBanner.css";

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

export default () => (
  <VideoContainer>
    <Video preload={"true"} autoPlay={true} muted={true} loop={true}>
      <source src={BannerVideo} poster={BannerVideoStill} type="video/mp4" />
    </Video>
    <HeroTextContainer>
      <HeroText>{`We help Davis cooks crowdfund food events so everyone can enjoy delicious homemade meals.`}</HeroText>
    </HeroTextContainer>
  </VideoContainer>
);
