import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  background: {
    backgroundImage: `url("https://wallpaperaccess.com/full/235006.jpg")`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
});

const Home = () => {
  const classes = useStyles();
  return <div className={classes.background}></div>;
};

export default Home;
