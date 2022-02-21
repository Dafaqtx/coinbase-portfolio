import styled from "styled-components";
import Portfolio from "./Portfolio";
import Promos from "./Promos";

const Main = () => {
  return (
    <Wrapper>
      <Portfolio />
      <Promos />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 64px);
  overflow: hidden;

  & div {
    border-radius: 0.4rem;
  }
`;

export default Main;
