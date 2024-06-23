import React from "react";
import styled from "styled-components";

const Conatainer = styled.div`
    margin: 0 60px;
    padding: 20px;
    background-color: white;
    border-radius: 10px ;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Price = styled.span`
    font-weight: bold;
    font-size: 50px;
`;

const Type = styled.div`
    margin: 10px 0;
    padding: 10px;
    border: 1.5px solid crimson;
    color: crimson;
    background-color: white;
    border-radius: 20px;
`;
const List = styled.ul`
    list-style: none;
`;
const ListItems = styled.li`
    margin: 30px 0;
`;
const Button = styled.button`
    border: none;
    background-color: darkblue;
    color: white;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
`;

const PriceCard = ({price, type}) => {
  return (
    <Conatainer>
      <PriceContainer>
        ₹<Price>{price}</Price>/month
      </PriceContainer>
        <Type>{type}</Type>
        <List>
          <ListItems>200 hand-crafted templates</ListItems>
          <ListItems>Exclusive support</ListItems>
          <ListItems>50+ prebuilt websites</ListItems>
          <ListItems>Premium Plugins</ListItems>
        </List>
        <Button>Join Now</Button>
    </Conatainer>
  );
};

export default PriceCard;
