import React from "react";
import styled from "@emotion/styled";

const BackgroundDiv  = styled.div(
  {
    backgroundImage: `url("https://wallpaper.dog/large/20421899.jpg")`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }
)

const Tours = () => {
  return <BackgroundDiv />;

};

export default Tours;
