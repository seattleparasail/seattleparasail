import React from "react";
import SkylineSVG from './images/SeattleSkyline'
import ForestSVG from './images/Forest'
import SmileyChute from './images/SmileyChute.jpg'
import HomeOptions from './HomeOptions'
import { useMediaQuery, Grid } from '@mui/material'
import styled from "@emotion/styled";

const IntroTextBox = styled.div(
  {
    position: 'absolute',
    color: 'white',
    maxWidth: '250px',
    top: '45vh',
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
      top: '5vh',
      padding: '60px',
    }
  }
)

const BackgroundDiv = styled.div({
  background: `url(${SmileyChute}) no-repeat center 90% fixed`,
  backgroundSize: 'cover',
  height: '105vh'
})

const Home = () => {
  const atLeast600 = useMediaQuery('(min-width:600px)');
  return (

    <Grid container>

      <Grid item xs={12}>
        <BackgroundDiv />
        <IntroTextBox>
          <p style={{fontWeight: 900}}>
            FLYING HIGH.
          </p>
          <p>
          The Emerald City shines from a Seahawk's perspective. Explore and book your tour.
          </p>
        </IntroTextBox>
        <SkylineSVG style={{ position: 'absolute', bottom: atLeast600 ? '-2vh' : '-3vh' }} />
        <ForestSVG style={{ position: 'absolute', bottom: '-5vh' }} />
      </Grid>
      
      <Grid item xs={12}>
        <HomeOptions />
      </Grid>

    </Grid>
  )
}
export default Home;
