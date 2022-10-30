import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  background: {
    backgroundImage: `url("https://i.etsystatic.com/12759209/r/il/0e73eb/949617418/il_1588xN.949617418_9ekh.jpg")`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
});

const BookNow = () => {
  const classes = useStyles();
  return <div className={classes.background}></div>;
};

export default BookNow;
