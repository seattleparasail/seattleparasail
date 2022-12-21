import React from "react";
import SkylineSVG from './images/SeattleSkyline'
import ForestSVG from './images/Forest'
import SmileyChute from './images/SmileyChute.jpg'
import HomeOptions from './HomeOptions'
import styled from "@emotion/styled";

const Home = () => {

  return (<>
    <BackgroundDiv />
    <IntroTextBox>
      <p style={{ fontWeight: 900 }}>FLYING HIGH.</p>
      <p>The Emerald City shines from a Seahawk's perspective. Explore and book your tour.</p>
    </IntroTextBox>
    <SVGContainer>
      <SkylineSVG />
      <ForestSVG style={{ marginTop: '-10px' }} />
    </SVGContainer>
    <SVGBelowFill/>

    <HomeOptions />
  </>)
}

const BackgroundDiv = styled.div(
  {
    height: `calc(100vh + 50px)`,
    backgroundImage: `url(${SmileyChute})`,
    backgroundPosition: "center 90%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: -2
  }
)

const SVGContainer = styled.div({
  position: 'absolute',
  bottom: `-55px`,
  width: '100%',
})

const SVGBelowFill = styled.div({
  backgroundColor: 'white',
  position: 'absolute',
  bottom: `-200px`,
  width: '100%',
  minHeight: '150px'
})

const IntroTextBox = styled.div(
  {
    position: 'absolute',
    color: 'white',
    maxWidth: '250px',
    top: '45vh',
    padding: '20px',
    fontSize: '20px',
    zIndex: 2,
    '@media(min-width: 768px)': {
      fontSize: '40px',
      top: '20vh',
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

export default Home
