import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Grid, Paper } from '@mui/material'
import SmileyChute from './images/SmileyChute.jpg'
import DistantChute from './images/DistantChuteWithDeckShadow.jpg'
import TripleGirlsSmile from './images/TripleGirlsSmiling.jpg'
import AerialAlignment from './images/AerialAlignment.jpg'
import { AppContext } from './index'

const HomeOptions = () => {
    const AppContextState = useContext(AppContext)
    const { currentTheme } = AppContextState

    return (
        <Grid container style={{ marginTop: '150px' }}>
            {circleOptions.map((item, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={4}>
                    <Item style={{
                         backgroundImage: item.image, 
                         border: `5px solid ${currentTheme.colors.primary}`,
                         backgroundPosition: 'center 50%'  
                    }}>
                        <Text>
                            {item.title}
                        </Text>
                    </Item>
                </Grid>
            ))}
        </Grid>
    )
}

const Item = styled(Paper)({
    backgroundPosition: "center 90%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: '300px',
    height: '300px',
    '@media(min-width: 1200px)': {
        width: '350px',
        height: '350px',
    },
    margin: '25px auto',
    borderRadius: '50%',
    textAlign: 'center',
})

const Text = styled.p({
    paddingTop: '30%',
    color: 'white',
    fontFamily: 'Trade Winds',
    fontWeight: 600,
    fontSize: '24px'
})

const circleOptions = [
    {
        title: 'Parasail Flights',
        image: `url(${DistantChute})`
    },
    {
        title: 'Photo Video',
        image: `url(${TripleGirlsSmile})`
    },
    {
        title: 'Book Now',
        image: `url(${AerialAlignment})`
    },
    // {
    //     title: 'Observers',
    //     image: `url(${SmileyChute})`
    // },
    // {
    //     title: 'Private and Corporate',
    //     image: `url(${SmileyChute})`
    // },
    // {
    //     title: 'FAQ',
    //     image: `url(${SmileyChute})`
    // }
]

export default HomeOptions;