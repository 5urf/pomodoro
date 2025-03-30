import styled from "styled-components";
import { useShallow } from "zustand/shallow";
import useTimerStore from "../../store/useTimerStore";
import RoundGoalItem from "./RoundGoalItem";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20rem;
`;

const RoundGoal = () => {
  const { rounds, completedRounds, goals, completedGoals } = useTimerStore(
    useShallow((state) => ({
      rounds: state.rounds,
      completedRounds: state.completedRounds,
      goals: state.goals,
      completedGoals: state.completedGoals,
    }))
  );

  const roundItemNumber = `${completedRounds}/${rounds}`;
  const goalItemNumber = `${completedGoals}/${goals}`;

  return (
    <Container>
      <RoundGoalItem itemNumber={roundItemNumber} itemTitle='ROUND' />
      <RoundGoalItem itemNumber={goalItemNumber} itemTitle='GOAL' />
    </Container>
  );
};

export default RoundGoal;
