import styled from "@emotion/styled";
import { motion } from "framer-motion";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container>
      <H1>FERAS AHMAD</H1>
      <H4>SOFTWARE ENGINEER</H4>
    </Container>
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

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  float: left;
  padding: none;
  position: fixed;
  z-index: -1;
  object-fit: cover;
  filter: brightness(60%);
`;

export default Home;
