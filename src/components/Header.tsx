import styled from "styled-components";
import Setting from "./Setting";

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 4.8rem;
  font-weight: 700;
  text-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.4);
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title>Pomodoro</Title>
      <Setting />
    </StyledHeader>
  );
};

export default Header;
