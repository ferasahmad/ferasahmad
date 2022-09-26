import styled from "@emotion/styled";
import type { NextPage } from "next";
import Image from "next/image";
import { MOBILE_BREAKPOINT } from "../../constants/styles";
import AnimateOnScroll from "../animations/AnimateOnScroll";

const About: NextPage = () => {
  return (
    <Container>
      <div />
      <AnimateOnScroll duration={2}>
        <Image src="/me2.png" height={450} width={410} />
      </AnimateOnScroll>
      <AnimateOnScroll duration={3}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </AnimateOnScroll>
    </Container>
  );
};

const Container = styled.div`
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 35px;
  position: relative;
  background: black;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column-reverse;
  }
`;

const Text = styled.p`
  max-width: 400px;
  font-size: 20px;
  line-height: 45px;
  background-clip: text;
`;

export default About;
