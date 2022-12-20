import React, {useState, useEffect, useLayoutEffect} from "react";
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
      padding: '30px',
      maxWidth: '450px'

    }
  }
)

const Home = () => {

  const [pageHeight, setPageHeight] = useState(window.innerHeight)

  const updateSize = () => setPageHeight(window.innerHeight)


  useLayoutEffect(() => {
    
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize);
  }, [])

  const atLeast600 = useMediaQuery('(min-width:600px)');
  return (

    <Grid container>

      <Grid item xs={12}>
        <div style={{
          background: `url(${SmileyChute}) no-repeat center center fixed`,
          backgroundSize: 'cover',
          height: atLeast600 ? `${pageHeight + 100}px` : `${pageHeight + 25}px`
          }}/>
        <IntroTextBox>
          <p style={{fontWeight: 900}}>
            FLYING HIGH.
          </p>
          <p>
          The Emerald City shines from a Seahawk's perspective. Explore and book your tour.
          </p>
        </IntroTextBox>
        <SkylineSVG style={{  position: 'absolute', top: `${atLeast600 ? pageHeight - 200 : pageHeight-90}px`}} />
        <ForestSVG style={{ height: '100px', position: 'absolute', width: '100%', top: `${atLeast600 ? pageHeight + 25 : pageHeight -35}px` }}  />
      </Grid>
      
      <Grid item xs={12}>
        <HomeOptions />
      </Grid>

    </Grid>
  )
}
export default Home;
