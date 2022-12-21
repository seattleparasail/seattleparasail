import React from "react";
import styled from "@emotion/styled";
import { Grid, Paper } from '@mui/material'
import { theme } from './Themes'

const Item = styled(Paper)({
    border: '3px solid black',
    // backgroundColor: theme.colors.yellowGold,
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
    color: 'black'
})

const circleOptions = [
    {
        title: 'Parasail Flights',
        image: ''
    },
    {
        title: 'Photo Video',
        image: ''
    },
    {
        title: 'Book Now',
        image: ''
    },
    {
        title: 'Observers',
        image: ''
    },
    {
        title: 'Private and Corporate',
        image: ''
    },
    {
        title: 'FAQ',
        image: ''
    }
]


const HomeOptions = () => {
    return (
            <Grid container style={{marginTop: '170px'}}>
                    {circleOptions.map((item, idx) => (
                        <Grid key={idx} item xs={12} sm={6} md={4}>
                            <Item>
                                <Text>
                                    {item.title}
                                </Text>
                            </Item>
                        </Grid>
                    ))}
            </Grid>
    )
}


export default HomeOptions;