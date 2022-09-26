import styled from "@emotion/styled";
import type { NextPage } from "next";
import { MOBILE_BREAKPOINT } from "../../constants/styles";
import FadeInElement from "../animations/FadeInElement";

const Hero: NextPage = () => {
  return (
    <>
      <Container>
        <FadeInElement duration={3}>
          <H1>FERAS AHMAD</H1>
        </FadeInElement>
        <FadeInElement duration={5}>
          <H4>SOFTWARE ENGINEER</H4>
        </FadeInElement>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(transparent, black);
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background: linear-gradient(transparent, transparent, black);
  }
`;

const H1 = styled.h1`
  font-family: Collects;
  font-size: 60px;
  letter-spacing: 25px;
  margin: 10px 0;
  text-align: center;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 40px;
  }
`;

const H4 = styled.h4`
  width: auto;
  letter-spacing: 25px;
  margin: 10px 0;
  text-align: center;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 10px;
  }
`;

export default Hero;
