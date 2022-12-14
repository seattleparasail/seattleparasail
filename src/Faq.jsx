import React from "react";
import styled from "@emotion/styled";

const BackgroundDiv  = styled.div(
  {
    backgroundImage: `url("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg")`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }
)

const Faq = () => {
  return <BackgroundDiv />;
};

export default Faq;
