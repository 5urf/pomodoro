import styled from "styled-components";
import Goal from "./Goal";
import Round from "./Round";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20rem;
`;

const RoundGoal = () => {
  return (
    <Container>
      <Round />
      <Goal />
    </Container>
  );
};

export default RoundGoal;
