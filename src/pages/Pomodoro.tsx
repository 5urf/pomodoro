import styled from "styled-components";
import CtrlButton from "../components/CtrlButton";
import RoundGoal from "../components/RoundGoal";
import Timer from "../components/Timer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  gap: 3rem;
`;

const Pomodoro = () => {
  return (
    <Container>
      <Timer />
      <CtrlButton />
      <RoundGoal />
    </Container>
  );
};

export default Pomodoro;
