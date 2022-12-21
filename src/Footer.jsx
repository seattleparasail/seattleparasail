import React from "react";
import styled from "@emotion/styled";
import { Grid } from '@mui/material'
import { theme } from './StylesAndThemes/Themes'

const FooterText = styled.p({
    color: theme.colors.galaxyGold,
    marginLeft: '3px',
    cursor: 'pointer',
    fontSize: '11px',
    fontWeight: 500,
    '@media(min-width: 768px)': {
        marginLeft: '10px',
        fontSize: '14px',
    },
    '@media(min-width: 1000px)': {
        marginLeft: '15px',
        fontSize: '18px',
    }

})

const handleLocationClick = () => window.open('https://goo.gl/maps/uecCbZ6z5SoeE5Bs7', '_blank');
const handleEmailClick = () => window.open(`mailto: seattleparasail@gmail.com`, '_blank');

const Footer = () => {

    return (
        <FooterContainer>
            <Grid container spacing={1} direction="row"
                justify="flex-end"
                alignItems="center">

                <Grid item xs={4}>
                    <FooterText onClick={handleLocationClick}>
                        Bell Harbor Marina
                    </FooterText>
                    <FooterText onClick={handleLocationClick}>
                        Seattle, WA
                    </FooterText>
                    <FooterText onClick={handleEmailClick}>
                        seattleparasail@gmail.com
                    </FooterText>
                </Grid>

                <Grid item xs={4}>
                    {/* middle */}
                    </Grid>

                <Grid item xs={4}>
                    {/* right side */}
                    </Grid>
            </Grid>
        </FooterContainer>
    )
}


const FooterContainer = styled.div(
    {
        position: 'relative',
        marginTop: '80px',
        minHeight: '100px',
        width: '100%',
        backgroundColor: theme.colors.cascadeForestGreen_75_Opacity
    }
)

export default Footer