import React from "react";
import styled from "@emotion/styled";

const BookNow = () => {
  return (
    <>
      <BackgroundDiv />
      <TextBox1>
        <p style={{ fontWeight: 900 }}>SCHEDULE COMING SOON!</p>
        <p> (site under construction)</p>
      </TextBox1>
    </>
  )
};

export default BookNow;

const BackgroundDiv = styled.div(
  {
    backgroundImage: `url("https://i.etsystatic.com/12759209/r/il/0e73eb/949617418/il_1588xN.949617418_9ekh.jpg")`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }
)

const TextBox1 = styled.div(
  {
    position: 'absolute',
    color: 'white',
    maxWidth: '250px',
    top: '45vh',
    padding: '20px',
    fontSize: '20px',
    zIndex: 2,
    '@media(min-width: 768px)': {
      fontSize: '33px',
      top: '20vh',
      padding: '40px',
      maxWidth: '400px'
    },
    '@media(min-width: 800px)': {
      top: '10vh',
      padding: '30px',
      maxWidth: '450px'

    }
  }
)

