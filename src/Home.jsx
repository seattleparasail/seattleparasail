import React, {useContext} from "react";
import SkylineSVG from './images/SeattleSkyline'
import ForestSVG from './images/Forest'
import SmileyChute from './images/SmileyChute.jpg'
import HomeOptions from './HomeOptions'
import ThemeSelector from './ThemeSelector'
import styled from "@emotion/styled";
import { css, keyframes } from '@emotion/css'
import { Anchor as AnchorIcon } from "@mui/icons-material";
import {AppContext} from './index'

const Home = () => {

  const AppContextState = useContext(AppContext)
  const { currentTheme } = AppContextState

  return (<>
    <BackgroundDiv />
    <ThemeSelector/>
    <IntroTextBox>
      <p style={{ fontWeight: 900 }}>FLYING HIGH.</p>
      <p>The Emerald City shines from a Seahawk's perspective. Explore and book your tour.</p>
    </IntroTextBox>
    <SVGContainer>
      <SkylineSVG style={{ fill: 'white'}}/>
      <ForestSVG style={{ marginTop: '-10px' }} />
    </SVGContainer>
    <SVGBelowFill />
    <AnchorText style={{ color: currentTheme.colors.wildcard}}>Anchors Aweigh</AnchorText>
    <AnchorIconStyled style={{fill: currentTheme.colors.wildcard}} className={css`animation: ${bounce} 5s ease infinite;`} />
    <HomeOptions />
  </>)
}

const AnchorText = styled.p({
  fontSize: '20px',
  fontFamily: 'Trade Winds',
  position: 'absolute',
  bottom: `-150px`,
  textAlign: 'center',
  width: '100%',
  '@media(min-width: 768px)': {
    bottom: `-155px`,
    fontSize: '35px',
  },

})

const AnchorIconStyled = styled(AnchorIcon)({
  position: `absolute`,
  bottom: `-210px`,
  width: `100%`,
  height: `40px`,
  transformOrigin: 'center bottom',
  '@media(min-width: 768px)': {
    bottom: `-220px`,
    height: `50px`,
  },
})

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

const bounce = keyframes`
  from, 15% to {
    transform: translate3d(0,0,0);
  }

  25% {
    transform: translate3d(0, -30px, 0);
  }

  40% {
    transform: translate3d(0, -15px, 0);
  }

  70% {
    transform: translate3d(0,-50px,0);
  }
`

export default Home
