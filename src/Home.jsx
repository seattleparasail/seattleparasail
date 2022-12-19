import React from "react";
import SkylineSVG from './images/SeattleSkyline'
import ForestSVG from './images/Forest'
import TandemFlagChute from './images/SmileyChute.jpg'
import TourCircles from './TourCircles'
import { Typography, useMediaQuery } from '@mui/material'
import styled from "@emotion/styled";
import { theme } from './Themes'

const BackgroundDiv = styled.div(
  {
    background: `url(${TandemFlagChute}) no-repeat center 90% fixed`,
    backgroundSize: 'cover',
    height: 'calc(100vh + 100px)',
    zIndex: 2
  }
)

const IntroTextBox = styled.div(
  {
    position: 'absolute',
    color: 'white',
    maxWidth: '300px',
    marginTop: '10vh',
    padding: '20px',
    zIndex: 2,
    '@media(min-width: 600px)': {
      marginTop: '20vh',
      padding: '40px',
      maxWidth: '400px'
    },
    '@media(min-width: 1000px)': {
      padding: '60px',
    }
  }
)

const SvgContainer = styled.div(
  {
    position: 'absolute',
    bottom: '-50px',
    backgroundColor: 'transparent',
    height: 'auto',
    width: '100%',
    '@media(min-width: 600px)': {
      bottom: '-65px',
    },
    '@media(min-width: 1000px)': {
      bottom: '-105px',
    }
  }
)

const SvgBelowFill = styled.div(
  {
    backgroundColor: 'white',
    height: '200px',
    width: '100%',
    position: 'absolute',
    bottom: '-245px',
    '@media(min-width: 600px)': {
      bottom: '-260px',
    },
    '@media(min-width: 1000px)': {
      bottom: '-300px',
    }
  })

const Home = () => {
  const atLeast600 = useMediaQuery('(min-width:600px)');
  return (
    <BackgroundDiv >

      <IntroTextBox>
        <Typography variant={atLeast600 ? 'h3' : 'h4'}>FLYING HIGH.</Typography>
        <Typography variant={atLeast600 ? 'h5' : 'h6'}>The Emerald City shines from a Seahawk's perspective.</Typography>
        <Typography variant={atLeast600 ? 'h5' : 'h6'}>Explore and book your tour.</Typography>
      </IntroTextBox>

      <SvgContainer>
        <SkylineSVG />

        <ForestSVG style={{ marginTop: '-5vh' }} />


      </SvgContainer>
      <SvgBelowFill />
      <TourCircles />


    </BackgroundDiv>
  )
}
export default Home;
