import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 4.8rem;
  font-weight: 600;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title>Pomodoro</Title>
    </StyledHeader>
  );
};

export default Header;
