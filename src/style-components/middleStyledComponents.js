import styled from "styled-components";

// MIDDLE STYLES START

export const Middle = styled.div`
  min-height: 6.9rem;
  background-color: ${(props) =>
    props.change ? "var(--secondary-color)" : "var(--main-white-color)"};
  border-radius: 1.1rem;
  box-shadow: 0 1.5rem 1rem rgba(0 0 0 / 0.075);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SVG = styled.svg`
  margin: 0 clamp(1rem, 2.5vw, 2rem);
`;

export const Form = styled.form`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-right: 0.5rem;
  align-items: center;
  @media (max-width: 430px) {
    width: fit-content;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex: 100%;
  justify-content: space-between;
  align-items: center;
  margin-right: 2rem;
`;

export const Button = styled.button`
  font-size: clamp(1.2rem, 3.5vw, 1.6rem);
  padding: clamp(1.2rem, 3vw, 1.7rem) clamp(1.5rem, 3vw, 4rem);
  background-color: var(--primary-color);
  border-radius: 1rem;
  color: var(--white-color);
  transition: background-color 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #60abff;
  }
`;

export const Input = styled.input`
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  letter-spacing: 0.25rem;
  font-weight: 400;
  background-color: inherit;
  color: ${(props) =>
    props.change ? "var(--white-color)" : "var(--light-pale-blue)"};
  &::placeholder {
    font-size: clamp(1.3rem, 1vw, 1.8rem);
    letter-spacing: 0.075rem;
    color: ${(props) =>
      props.change ? "var(--white-color)" : "var(--light-pale-blue)"};
  }
`;

export const SearchResultText = styled.p`
  color: #f74646;

  @media (max-width: 430px) {
    display: none;
  }
`;
// MIDDLE STYLES ENDS
