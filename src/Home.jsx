import React, {useState, useEffect, useLayoutEffect} from "react";
import SkylineSVG from './images/SeattleSkyline'
import ForestSVG from './images/Forest'
import SmileyChute from './images/SmileyChute.jpg'
import SmileyChuteMobile from './images/SmileyChuteMobile.jpg'

import HomeOptions from './HomeOptions'
import { useMediaQuery, Grid, Container, Paper } from '@mui/material'
import styled from "@emotion/styled";

const BackgroundDiv = styled.div(
  {
    backgroundImage: `url(${SmileyChute})`,
    backgroundPosition: "center 90%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }
)

const IntroTextBox = styled.div(
  {
    position: 'absolute',
    color: 'white',
    maxWidth: '250px',
    top: '10vh',
    padding: '20px',
    fontSize: '20px',
    zIndex: 2,
    '@media(min-width: 600px)': {
      fontSize: '40px',
      top: '35vh',
      padding: '40px',
      maxWidth: '400px'
    },
    '@media(min-width: 800px)': {
      top: '10vh',
      padding: '30px',
      maxWidth: '450px'

    }
  }
)

const Home = () => {
    const lessThan600 = useMediaQuery('(max-width:600px)');

  return (<>
    <BackgroundDiv style={{ height: !lessThan600 ? `calc(100vh + 140px)` : `calc(100vh + 25px)`}}/>
          <IntroTextBox>
          <p style={{fontWeight: 900}}>
            FLYING HIGH.
          </p>
          <p>
          The Emerald City shines from a Seahawk's perspective. Explore and book your tour.
          </p>
        </IntroTextBox>
    <SkylineSVG style={{ position: 'absolute', top: !lessThan600 ? `calc(100vh - 250px)` : `calc(100vh - 90px)` }} />
    <ForestSVG style={{ height: '100px', position: 'absolute', width: '100%', top: !lessThan600 ? `calc(100vh + 65px)` : `calc(100vh - 35px)` }} />
    <HomeOptions/>
</>)}


export default Home
