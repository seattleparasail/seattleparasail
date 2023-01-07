

import React, { useContext } from "react";
import { AppContext } from './index'
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import styled from "@emotion/styled";
// import {theme} from './StyleAndThemes/theme'

const ContainerDiv = styled.div({
    height: '200px',
    position: 'absolute',
    top: `56px`,
    '@media(min-width: 600px)': {
        top: `64px`
    },
    '@media(min-width: 900px)': {
        top: `68.5px`
    },
    width: '100%',
    zIndex: 4
})

const ThemeSelector = () => {
    const AppContextState = useContext(AppContext)
    const { currentTheme, updateThemeChoice } = AppContextState

    const handleThemeChange = e => updateThemeChoice(e.target.value)

    return (
        <ContainerDiv>
            <FormControl sx={{ width: '120px' }}>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                <Select
                    defaultValue={currentTheme.name}
                    value={currentTheme.name}
                    label="Select A Theme"
                    onChange={handleThemeChange}
                    MenuProps={{
                        sx: {
                            '& .MuiMenu-paper': {
                                backgroundColor: 'white',
                                // color: currentTheme.colors.secondary
                            }
                        }
                    }}
                    sx={{
                        '&.MuiInputBase-root': {
                            height: '30px',
                            border: '1px solid white',
                            color: 'white',

                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            border: 'none'

                        },
                        '.MuiSvgIcon-root': {
                            fill: 'white',

                        }
                    }}

                >
                    <MenuItem  value='SuperSonics'>Sonics</MenuItem>
                    <MenuItem value='SeaHawks'>Hawks</MenuItem>
                    <MenuItem value='Kraken'>Kraken</MenuItem>
                    <MenuItem value='Mariners'>Mariners</MenuItem>
                    <MenuItem value='Sounders'>Sounders</MenuItem>
                    <MenuItem value='Huskies'>Huskies</MenuItem>
                </Select>
            </FormControl>
        </ContainerDiv>
    )


}

export default ThemeSelector