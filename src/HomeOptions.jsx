import React from "react";
import styled from "@emotion/styled";
import { Grid, Paper } from '@mui/material'
import SmileyChute from './images/SmileyChute.jpg'

const HomeOptions = () => {
    return (
        <Grid container style={{ marginTop: '150px' }}>
            {circleOptions.map((item, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={4}>
                    <Item style={{ backgroundImage: item.image }}>
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
    border: '3px solid black',
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
    paddingTop: '50%',
    color: 'white'
})

const circleOptions = [
    {
        title: 'Parasail Flights',
        image: `url(${SmileyChute})`
    },
    {
        title: 'Photo Video',
        image: `url(${SmileyChute})`
    },
    {
        title: 'Book Now',
        image: `url(${SmileyChute})`
    },
    {
        title: 'Observers',
        image: `url(${SmileyChute})`
    },
    {
        title: 'Private and Corporate',
        image: `url(${SmileyChute})`
    },
    {
        title: 'FAQ',
        image: `url(${SmileyChute})`
    }
]

export default HomeOptions;