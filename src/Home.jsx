import React from "react";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  homeContainer: {
    backgroundImage: `url("https://wallpaperaccess.com/full/235006.jpg")`,
      /* Full height */
      height: "100vh",

      /* Center and scale the image nicely */
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
  },
});


const Home = () => {

    const curlyWavePic = ''
    const classes = useStyles();

    return (
        <div className={classes.homeContainer}>

          
        
        </div>
    )
}

export default Home