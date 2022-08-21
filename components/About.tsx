import styled from "@emotion/styled";
import type { NextPage } from "next";

const Container = styled.div`
  height: 700px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const About: NextPage = () => {
  return <Container>About</Container>;
};

export default About;
