import styled from "@emotion/styled";
import type { NextPage } from "next";
import Image from "next/image";

const Tech: NextPage = () => {
  return (
    <Container>
      <Item imagePath="/html.png" />
      <Item imagePath="/css.png" />
      <Item imagePath="/github.png" />
      <Item imagePath="/next.png" />
      <Item imagePath="/react.png" />
    </Container>
  );
};

const Item = ({ imagePath }: { imagePath: string }) => {
  return (
    <IconContainer>
      <Image src={imagePath} alt="" height={100} width={100} />
    </IconContainer>
  );
};

const Container = styled.div`
  height: 250px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px;
  position: relative;
  background: black;
`;

const IconContainer = styled.div`
  padding: 50px;
  img {
    filter: brightness(0) invert(1);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export default Tech;
