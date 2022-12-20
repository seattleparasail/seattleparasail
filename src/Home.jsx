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
    backgroundPosition: "center",
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
      top: '5vh',
      padding: '30px',
      maxWidth: '450px'

    }
  }
)

const Home = () => {
    const lessThan600 = useMediaQuery('(max-width:600px)');

  return (<>
    <BackgroundDiv style={{ height: !lessThan600 ? `calc(100vh + 100px)` : `calc(100vh + 25px)`}}/>
          <IntroTextBox>
          <p style={{fontWeight: 900}}>
            FLYING HIGH.
          </p>
          <p>
          The Emerald City shines from a Seahawk's perspective. Explore and book your tour.
          </p>
        </IntroTextBox>
    <SkylineSVG style={{ position: 'absolute', top: !lessThan600 ? `calc(100vh - 200px)` : `calc(100vh - 90px)` }} />
    <ForestSVG style={{ height: '100px', position: 'absolute', width: '100%', top: !lessThan600 ? `calc(100vh + 25px)` : `calc(100vh - 35px)` }} />
</>)}

export default Home

// const IntroTextBox = styled.div(
//   {
//     position: 'absolute',
//     color: 'white',
//     maxWidth: '250px',
//     top: '10vh',
//     padding: '20px',
//     fontSize: '20px',
//     zIndex: 2,
//     '@media(min-width: 600px)': {
//       fontSize: '40px',
//       top: '35vh',
//       padding: '40px',
//       maxWidth: '400px'
//     },
//     '@media(min-width: 800px)': {
//       top: '5vh',
//       padding: '30px',
//       maxWidth: '450px'

//     }
//   }
// )

// const Home = () => {

//   // const [pageHeight, setPageHeight] = useState(window.innerHeight)

//   // const updateSize = () => setPageHeight(window.innerHeight)


//   // useLayoutEffect(() => {
    
//   //   window.addEventListener('resize', updateSize)
//   //   return () => window.removeEventListener('resize', updateSize);
//   // }, [])

//   const lessThan600 = useMediaQuery('(max-width:600px)');
//   return (

//     <Grid container>

//       <Grid item xs={12}>
//         <div style={{
//           background: `url(${!lessThan600 ? SmileyChute : SmileyChuteMobile}) no-repeat center 60%  fixed`,
//           backgroundSize: 'contain',
          // height: !lessThan600 ? `calc(100vh + 100px)` : `calc(100vh + 25px)`,
//           }}/>
//         <IntroTextBox>
//           <p style={{fontWeight: 900}}>
//             FLYING HIGH.
//           </p>
//           <p>
//           The Emerald City shines from a Seahawk's perspective. Explore and book your tour.
//           </p>
//         </IntroTextBox>
        // <SkylineSVG style={{ position: 'absolute', top: !lessThan600 ? `calc(100vh - 200px)` : `calc(100vh - 90px)`}} />
        // <ForestSVG style={{ height: '100px', position: 'absolute', width: '100%', top: !lessThan600 ? `calc(100vh + 25px)` : `calc(100vh - 35px)` }} />
//       </Grid>
      
//       <Grid item xs={12}>
//         <HomeOptions />
//       </Grid>

//     </Grid>
//   )
// }
// export default Home;
