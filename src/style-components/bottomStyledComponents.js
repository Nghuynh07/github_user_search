import styled from "styled-components";

export const Bottom = styled.div`
  width: 100%;
  min-height: 41.9rem;
  background-color: ${(props) =>
    props.change ? "var(--secondary-color)" : "var(--main-white-color)"};
  border-radius: 1.1rem;
  box-shadow: 0 0 3rem rgba(0 0 0 / 0.075);
  position: relative;

  display: flex;
  padding: clamp(2rem, 5vw, 4rem);
  gap: 3rem;

  @media (max-width: 768px) {
  }
`;

export const AvatarContainer = styled.div`
  border-radius: 50%;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const IMG = styled.img`
  width: 100%;
  border-radius: 50%;
`;

export const MobileAvatarContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    border-radius: 50%;
  }
`;

export const MainContentContainer = styled.div`
  width: 300%;

  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }
`;
export const MainSectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
  }
`;

export const MainSectionOneWrapper = styled.div`
  width: 200%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 768px) {
    margin-left: 4rem;
    flex-direction: column;
  }
`;

export const MainSectionOneH1 = styled.h1`
  font-size: clamp(1.6rem, 4.5vw, 2.6rem);
  color: ${(props) =>
    props.change ? "var(--white-color)" : "var(--light-dark-gray)"};
`;

export const Octocat = styled.p`
  color: var(--primary-color);
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 300;
  margin-top: 0.5rem;
`;

export const Joined = styled.p`
  color: ${(props) =>
    props.change ? "var(--white-color)" : "var(--light-dark-gray)"};
  font-size: clamp(1.3rem, 3vw, 1.5rem);

  @media (max-width: 768px) {
    margin-top: clamp(0.5rem, 1.5vw, 1rem);
  }
`;

export const MainParagraph = styled.div`
  color: ${(props) =>
    props.change ? "var(--white-color)" : "var(--light-dark-gray)"};
  font-size: clamp(1.3rem, 3vw, 1.5rem);
`;

export const MainSectionTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1.5rem 3rem 1.5rem 3rem;
  background-color: ${(props) =>
    props.change ? "var(--dark-color)" : "var(--main-background-color)"};
  border-radius: 1.1rem;

  @media (max-width: 374px) {
    justify-items: center;
    gap: 2.5rem;
    text-align: center;
  }
`;

export const SectionTwoText = styled.p`
  font-size: 1.3rem;
  color: ${(props) =>
    props.change ? "var(--white-color)" : "var(--light-dark-gray)"};
`;

export const SectionTwoNumber = styled.h1`
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  color: ${(props) =>
    props.change ? "var(--white-color)" : "var(--light-dark-gray)"};
`;

export const MainSectionThree = styled.div`
  display: grid;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 430px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
  }
`;

export const SectionThreeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

// BOTTOM STYLES ENDS
