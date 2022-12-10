import * as React from "react";
import SkylineComponent from './images/SkylineComponent'
import styled from "@emotion/styled";

const BackgroundDiv = styled.div(
  {
    background: `url('https://www.paradisecoast.com/sites/default/files/header-parasailing_couple_-_2017_-_ic8a7795.jpg') no-repeat 20% top fixed`,
    backgroundSize: 'cover',
    height: '100vh'
  }
)

const SkyLineContainer = styled.div(
  {
    position: 'absolute',
    bottom: '-5px',
    backgroundColor: 'transparent',
    height: 'auto',
    width: '100%',
    '@media(min-width: 600px)' :  {
      bottom: '-10px',
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
