import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";

import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <Container>
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

const Container = styled.div`
  background: rgb(0, 0, 0);
  background: -moz-linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 6%,
    rgba(0, 0, 0, 0.35480129551820727) 31%,
    rgba(0, 0, 0, 0.9178265056022409) 67%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 6%,
    rgba(0, 0, 0, 0.35480129551820727) 31%,
    rgba(0, 0, 0, 0.9178265056022409) 67%,
    rgba(0, 0, 0, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 6%,
    rgba(0, 0, 0, 0.35480129551820727) 31%,
    rgba(0, 0, 0, 0.9178265056022409) 67%,
    rgba(0, 0, 0, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);

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

export default Home;
