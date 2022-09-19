import styled from "@emotion/styled";
import type { NextPage } from "next";

const Contact: NextPage = () => {
  return <Container>Contact</Container>;
};

const Container = styled.div`
  height: 700px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(black, transparent);
`;

export default Contact;
