import React from "react";
import styled from "@emotion/styled";

const BackgroundDiv  = styled.div(
  {
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  props => ({
    backgroundImage: props.image
  })
)

const Home = () => {
  return <BackgroundDiv image={`url("https://wallpaperaccess.com/full/235006.jpg")`}/>;
};

export default Home;
