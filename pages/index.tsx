import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Feras Ahmad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </Container>
  );
};

const Container = styled.div`
  @font-face {
    font-family: Collects;
    src: url("/collects.ttf");
    font-weight: 500;
  }

  @font-face {
    font-family: DMS Sans;
    src: url("/DMSans-Regular.ttf");
    font-weight: 500;
  }

  font-family: DMS Sans;
  height: 100%;
`;

export default Home;
