import styled from "@emotion/styled";
import type { NextPage } from "next";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-size: cover;
  background-position: center;
`;

const H1 = styled.h1`
  font-family: Zerovelo;
  font-size: 35px;
  letter-spacing: 25px;
  margin: 10px 0;
  color: black;
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

const Home: NextPage = () => {
  return (
    <Container>
      <VideoBackground src={"/video.mp4"} autoPlay loop muted />
      <H1>FERAS AHMAD</H1>
      <H4>SOFTWARE ENGINEER</H4>
    </Container>
  );
};

export default Home;
