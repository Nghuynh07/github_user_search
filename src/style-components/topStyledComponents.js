import styled from "styled-components";

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TopHeading = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  letter-spacing: -0.2rem;
  color: ${(props) =>
    props.change ? "var(--white-color)" : "var(--black-color)"};
`;

export const TopToggle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.2s;
  &:hover .dark {
    color: ${(props) =>
      !props.change ? "var(--hover-dark-color)" : "var(--black-color)"};
    transition: color 0.2s;
  }

  &:hover .moon {
    fill: var(--hover-dark-color);
    transition: color 0.2s;
  }

  &:hover .sun {
    fill: var(--hover-dark-color);
    transition: color 0.2s;
  }

  & > * {
    margin: 0.5rem;
    pointer-event: none;
  }
`;

export const TopH4 = styled.h4`
  font-size: 1.3rem;
  text-transform: uppercase;
  color: ${(props) =>
    props.change ? "var(--white-color)" : "var(--light-gray-color)"};
  letter-spacing: 0.2rem;
`;

// TOP STYLES ENDS
