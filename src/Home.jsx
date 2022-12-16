import React from "react";
import SkylineComponent from './images/SkylineComponent'
import WhiteForest from './images/ForestWhite'

import TandemFlagChute from './images/SmileyChute.jpg'
import { Typography, useMediaQuery } from '@mui/material';
import styled from "@emotion/styled";



const BackgroundDiv = styled.div(
  {
    background: `url(${TandemFlagChute}) no-repeat center 90% fixed`,
    backgroundSize: 'cover',
    height: '120vh',
  }
)

const IntroTextBox = styled(Typography)(
  {
    position: 'absolute',
    color: 'white',
    maxWidth: '300px',
    marginTop: '55vh',
    padding: '20px',
    zIndex: 2,
    '@media(min-width: 600px)' :  {
      marginTop: '35vh',
      padding: '40px',
      maxWidth: '400px'
    },
  }
)

const SkyLineContainer = styled.div(
  {
    position: 'absolute',
    bottom: '-39px',
    backgroundColor: 'transparent',
    height: 'auto',
    width: '100%',
    '@media(min-width: 600px)' :  {
      bottom: '-65px',
    },
    '@media(min-width: 1000px)' :  {
      bottom: '-105px',
    }
  }
)

const WhiteForestContainer = styled.div(
  {
    position: 'absolute',
    bottom: '-37vh',
    backgroundColor: 'transparent',
    minHeight: '20vh',
    width: '100%',
    '@media(min-width: 600px)' :  {
      bottom: '-36vh',
    },
    '@media(min-width: 850px)' :  {
      bottom: '-32vh',
    },
    '@media(min-width: 850px)' :  {
      bottom: '-30vh',
    },
  }
)

const Home = () => {
  const atLeast600 = useMediaQuery('(min-width:600px)');
  return (
  <BackgroundDiv >

    <IntroTextBox>
    <Typography variant={atLeast600 ? 'h3' : 'h4'}>FLYING HIGH.</Typography>
      <Typography variant={atLeast600 ? 'h5' : 'h6'}>The Emerald City shines from a Seahawk's perspective.</Typography>
      <Typography variant={atLeast600 ? 'h5' : 'h6'}>Explore and book your tour.</Typography>
    </IntroTextBox>

    <SkyLineContainer>
      <SkylineComponent />
    </SkyLineContainer>
    <WhiteForestContainer>
      <WhiteForest/>
    </WhiteForestContainer>

  </BackgroundDiv>
)}
export default Home;
