import styled, { css } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Features from "./components/Features";
import Service from "./components/Service";
import Price from "./components/Price";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
  background-color: #ddffd3;
`;
const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0% 100%);
  background-color: #d3d4ff;
`;
const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0% 100%);
  background-color: #f1afef;
`;
const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: #f1afaf;
`;

const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Features />
        <FeatureShape />
      </Container>
      <Container>
        <Service/>
        <ServiceShape/>
      </Container>
      <Container>
        <Price/>
        <PriceShape/>
      </Container>
    </>
  );
};

export default App;
