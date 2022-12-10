import React from "react";
import styled from "@emotion/styled";

const BackgroundDiv  = styled.div(
  {
    backgroundImage: `url("https://wallpaperaccess.com/full/235006.jpg")`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }
)

const Home = () => {
  return <BackgroundDiv />;
};

export default Home;
