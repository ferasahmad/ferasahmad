import styled from "@emotion/styled";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
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

      <div />
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
`;

const Text = styled.p`
  max-width: 400px;
  font-size: 20px;
  line-height: 45px;
  background-clip: text;
`;

const TechnologiesContainer = styled.div`
  width: 400px;
  height: 400px;
  background: gray;
`;

export default About;
