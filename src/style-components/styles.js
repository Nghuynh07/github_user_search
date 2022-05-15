import styled from "styled-components";
// GLOBAL
export const Main = styled.main`
  max-width: 100%;
  min-height: 100vh;
  background-color: ${(props) =>
    props.change ? "var(--dark-color)" : "var(--main-background-color)"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DevFinder = styled.div`
  width: 73rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 800px) {
    width: 92vw;
  }
`;
