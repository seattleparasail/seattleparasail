import React from "react";
import styled from "@emotion/styled";

const BackgroundDiv  = styled.div(
  {
    backgroundImage: `url("https://i.etsystatic.com/12759209/r/il/0e73eb/949617418/il_1588xN.949617418_9ekh.jpg")`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }
)

const BookNow = () => {
  return <BackgroundDiv />;
};

export default BookNow;

