import styled from "@emotion/styled";
import type { NextPage } from "next";
import Image from "next/image";
import { MOBILE_BREAKPOINT } from "../../constants/styles";
import AnimateOnScroll from "../animations/AnimateOnScroll";

const Tech: NextPage = () => {
  const technologies = ["html", "css", "github", "next", "react", "typescript"];
  let duration = 2;

  return (
    <Container>
      {technologies.map((tech) => {
        duration = duration + 0.5;
        return (
          <AnimateOnScroll duration={duration} key={tech}>
            <Item key={tech} imagePath={`/${tech}.png`} />
          </AnimateOnScroll>
        );
      })}
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
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-wrap: wrap;
    height: 50px;
    padding: 10px;
  }
`;

export default Tech;
