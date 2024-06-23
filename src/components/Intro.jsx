import React from "react";
import styled from "styled-components";
import woman from "../img/woman.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  margin-top: 40px;
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  width: 60%;
  font-size: 60px;
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
`;
const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 15px;
  background-color: #8b0000;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  letter-spacing: 2px;
  text-decoration: none; /* Remove underline for links */
  
  a {
    text-decoration: none; /* Ensure the link itself has no underline */
    color: inherit; /* Ensure the link inherits the color from the parent */
  }
`;
const Contacts = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.span`
  color: #fb8094;
  font-weight: bold;
`;
const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;
`;

const Image = styled.img`
  width: 100%;
`;

const Intro = () => {
  return (
    <Container id="home">
      <Left>
        <Title>Adventures in Creative Age</Title>
        <Desc>
          We believe that designing product and services in close patnership
          with our clients is the only way to have a real impact on their
          business.
        </Desc>
        <Info>
          <Button as="a" href="#pricing">START A PROJECT</Button>
          <Contacts>
            <Phone>CALL US @ +91 6398938483</Phone>
            <ContactText>
              For any queries contact us at agency24@gmail.com
            </ContactText>
          </Contacts>
        </Info>
      </Left>
      <Right>
        <Image src={woman}></Image>
      </Right>
      <AnimatedShapes></AnimatedShapes>
    </Container>
  );
};

export default Intro;
