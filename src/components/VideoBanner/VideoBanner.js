import React from "react";
import styled from "styled-components";
import BannerVideo from "../../images/website-header.mp4";
import BannerVideoStill from "../../images/banner-video-still.png";
import "./VideoBanner.css";

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100vh;
`;

const HeroText = styled.h2`
  color: white;
  font-size: 3em;
`;

const HeroTextContainer = styled.div`
  position: absolute;
  text-align: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
