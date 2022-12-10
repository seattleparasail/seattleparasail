import React from "react";
import SkylineComponent from './images/SkylineComponent'
import TandemFlagChute from './images/SmileyChute.jpg'
import styled from "@emotion/styled";

const BackgroundDiv = styled.div(
  {
    background: `url(${TandemFlagChute}) no-repeat center 90% fixed`,
    backgroundSize: 'cover',
    height: '100vh',
  }
)

const SkyLineContainer = styled.div(
  {
    position: 'absolute',
    bottom: '-6px',
    backgroundColor: 'transparent',
    height: 'auto',
    width: '100%',
    '@media(min-width: 600px)' :  {
      bottom: '-12px',
    },
    '@media(min-width: 800px)' :  {
      bottom: '-15px',
    }
  }
)

const Home = (props) => (
  <BackgroundDiv >
    <SkyLineContainer>
      <SkylineComponent />
    </SkyLineContainer>
  </BackgroundDiv>
);
export default Home;
