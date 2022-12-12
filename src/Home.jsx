import React from "react";
import SkylineComponent from './images/SkylineComponent'
import TandemFlagChute from './images/SmileyChute.jpg'
import { Typography, useMediaQuery } from '@mui/material';
import styled from "@emotion/styled";



const BackgroundDiv = styled.div(
  {
    background: `url(${TandemFlagChute}) no-repeat center 90% fixed`,
    backgroundSize: 'cover',
    height: '100vh',
  }
)

const IntroTextBox = styled(Typography)(
  {
    position: 'fixed',
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

  </BackgroundDiv>
)}
export default Home;
