import React from "react";
import styled from "styled-components";
import App from "../img/app.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;
const Image = styled.img`
  width: 90%;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.span`
  font-size: 70px;
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;
const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 115px;
  border-radius: 10px;
  border: none;
  padding: 10px 15px;
  color: white;
  background-color: darkblue;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none; /* Remove underline for links */

  a {
    text-decoration: none; /* Ensure the link itself has no underline */
    color: inherit; /* Ensure the link inherits the color from the parent */
  }
`;

const Features = () => {
  return (
    <>
      <Container id="features">
        <Left>
          <Image src={App} />
        </Left>
        <Right>
          <Title>
            <b>Good</b> Design
            <br />
            <b>Good</b> Business
          </Title>
          <SubTitle>We know that good design means good business</SubTitle>
          <Desc>
            We help our clients succeed by creating brand identites, enhance
            digital experiences, and print materials that communicate clearly,
            achieveing marketting goals, and look fantastic.
          </Desc>
          <Desc>
            We care your business and gurantee you achieve your marketting
            goals.
          </Desc>
          <Button as="a" href="#services">
            Learn More
          </Button>
        </Right>
      </Container>
      <AnimatedShapes />
    </>
  );
};

export default Features;
