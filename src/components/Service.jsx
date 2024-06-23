import React, { useState } from "react";
import styled from "styled-components";
import How from "../img/how.png";
import MiniCard from "./MiniCard";
import Play from "../img/play.png";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 50%;
  position: relative;
`;
const Image = styled.img`
  display: ${(props) => props.open && "none"};
  width: 67%;
`;
const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 0;
`;
const Right = styled.div`
  width: 50%;
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1``;
const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 16px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 20%;
  margin-right: 10px;
`;

const Service = () => {
  const [open, SetOpen] = useState(false);

  return (
    <Container id="services">
      <Left>
        <Image open={open} src={How} />
        <Video
          open={open}
          autoPlay
          loop
          controls
          src="https://www.youtube.com/watch?v=QyhwSYhX09s"
        ></Video>
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            We provide digital service experience services to startup and small
            businesses to looking for a partner of their digital media, design
            and development, lead generation and communication requirements. We
            work with you, not for you. Although we have a great resources.
          </Desc>
          <CardContainer>
            <MiniCard></MiniCard>
            <MiniCard></MiniCard>
            <MiniCard></MiniCard>
          </CardContainer>
          <Button onClick={() => SetOpen(true)}>
            <Icon src={Play}></Icon>How Its Works
          </Button>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Service;
