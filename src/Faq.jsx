import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  background: {
    backgroundImage: `url("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg")`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
});

const Faq = () => {
  const classes = useStyles();
  return <div className={classes.background}></div>;
};

export default Faq;
