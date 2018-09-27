import React from "react";
import styled from "styled-components";
import BannerVideo from "../../images/website-header.mp4";
import BannerVideoStill from "../../images/banner-video-still.png";
import "./VideoBanner.css";

const Video = styled.video`
  height: 100vh;
  width: 100%;
  object-fit: cover;
`;

export default () => (
  <div>
    <Video preload={"true"} autoPlay={true} muted={true} loop={true}>
      <source src={BannerVideo} poster={BannerVideoStill} type="video/mp4" />
    </Video>
  </div>
);
