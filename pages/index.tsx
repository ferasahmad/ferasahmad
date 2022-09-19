import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";

import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";

const Main: NextPage = () => {
  return (
    <Container>
      <VideoBackground src={"/video.mp4"} autoPlay loop muted />
      <Head>
        <title>Feras Ahmad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Experience />
      <Contact />
    </Container>
  );
};

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

const Container = styled.div`
  @font-face {
    font-family: Collects;
    src: url("/collects.ttf");
    font-weight: 500;
  }

  @font-face {
    font-family: Zerovelo;
    src: url("/zerovelo.ttf");
    font-weight: 500;
  }

  @font-face {
    font-family: DMS Sans;
    src: url("/DMSans-Regular.ttf");
    font-weight: 500;
  }

  font-family: DMS Sans;
  min-height: 100%;
`;

export default Main;
