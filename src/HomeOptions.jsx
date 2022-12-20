import React from "react";
import styled from "@emotion/styled";
import { Box, Avatar, Grid, Paper } from '@mui/material'
import { theme } from './Themes'

const BackgroundDiv = styled.div(
    {
        width: '100%',
        position: 'absolute',
        bottom: '-2245px',
        '@media(min-width: 600px)': {
            height: '1200px',
            bottom: '-1260px',
        },
        '@media(min-width: 1000px)': {
            bottom: '-1300px',
        }
    }
)

const Item = styled(Paper)({
    
    backgroundColor: theme.colors.emeraldCityGreen_50_Opacity,
    width: '300px',
    height: '300px',
    // margin: '5px',
    '@media(min-width: 1200px)': {
        width: '350px',
        height: '350px',
    },
    margin: '20px auto',
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
        <BackgroundDiv>
                <Grid container spacing={2}>
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
        </BackgroundDiv>
    )
}


export default HomeOptions;