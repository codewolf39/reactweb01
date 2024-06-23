import React from "react";
import styled from "styled-components";
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";

const Container = styled.div`
  height: 90%;
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormConatiner = styled.div`
  width: 50%;
`;
const Title = styled.h1`
  margin: 50px;
  margin-top: 0px;
`;
const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
`;
const LeftForm = styled.div`
  height: 100%;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
`;
const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
`;
const Button = styled.button`
  /* width: 115px; */
  border-radius: 10px;
  border: none;
  padding: 10px 15px;
  color: white;
  background-color: darkblue;
  font-size: 20px;
  cursor: pointer;
`;

const AddressCont = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AddressItems = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;
const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
`;
const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
`;

const Contact = () => {
  return (
    <Container id="contacts">
      <Wrapper>
        <FormConatiner>
          <Title>
            Questions?
            <br />
            Let's Get in Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name"></Input>
              <Input placeholder="Your Email"></Input>
              <Input placeholder="Subject"></Input>
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message"></TextArea>
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormConatiner>
        <AddressCont>
          <AddressItems>
            <Icon src={Map} />
            <Text>Rajiv Nagar, New Delhi, India</Text>
          </AddressItems>
          <AddressItems>
            <Icon src={Phone} />
            <Text>+91 6398938483</Text>
          </AddressItems>
          <AddressItems>
            <Icon src={Send} />
            <Text>agency24@gmail.com</Text>
          </AddressItems>
        </AddressCont>
      </Wrapper>
    </Container>
  );
};

export default Contact;
