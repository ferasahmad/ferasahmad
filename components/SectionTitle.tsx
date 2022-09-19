import styled from "@emotion/styled";

const H1 = styled.h1`
  text-transform: uppercase;
  font-size: 40px;
  margin: 5px;
  letter-spacing: 40px;
  position: absolute;
  top: 20px;
`;

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return <H1>{children}</H1>;
};

export default SectionTitle;
