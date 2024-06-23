import React from 'react'
import styled from 'styled-components'
import PriceCard from './PriceCard'

const Container = styled.div`
    margin: 0 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`



const Price = () => {
  return (
    <Container id='pricing'>
        <PriceCard  price="100" type="Basic"/>
        <PriceCard  price="250" type="Premium"/>
        <PriceCard  price="500" type="Advanced"/>
    </Container>
  )
}

export default Price