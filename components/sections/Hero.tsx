import styled from "@emotion/styled";
import type { NextPage } from "next";
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
`;

const H1 = styled.h1`
  font-family: Collects;
  font-size: 60px;
  letter-spacing: 25px;
  margin: 10px 0;
`;

const H4 = styled.h4`
  letter-spacing: 25px;
  margin: 10px 0;
`;

export default Hero;
