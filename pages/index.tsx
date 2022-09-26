import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/sections/About";

import Contact from "../components/sections/Contact";
import Experience from "../components/sections/Experience";
import FadeInElement from "../components/animations/FadeInElement";
import Hero from "../components/sections/Hero";
import ScrollProgress from "../components/animations/ScrollProgress";
import Tech from "../components/sections/Tech";

const Main: NextPage = () => {
  return (
    <>
      <Head>
        <title>Feras Ahmad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlackBackground />
      <ScrollProgress />
      <FadeInElement>
        <VideoBackground src={"/video.mp4"} autoPlay loop muted />
      </FadeInElement>
      <FadeInElement>
        <Container>
          <Hero />
          <About />
          <Tech />
          {/* <Experience />
          <Contact /> */}
        </Container>
      </FadeInElement>
    </>
  );
};

const BlackBackground = styled.div`
  position: fixed;
  z-index: -2;
  width: 100%;
  height: 100%;
  background: black;
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
`;

export default Main;
