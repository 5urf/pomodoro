import styled from "styled-components";
import useTimerStore from "../store/useTimerStore";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20rem;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

const ItemTitle = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.subTextColor};
`;

const ItemNumber = styled(ItemTitle)`
  opacity: 0.8;
`;

const RoundGoal = () => {
  const { rounds, completedRounds, goals, completedGoals } = useTimerStore();

  return (
    <Container>
      <ItemWrapper>
        <ItemNumber>{`${completedRounds}/${rounds}`}</ItemNumber>
        <ItemTitle>ROUND</ItemTitle>
      </ItemWrapper>
      <ItemWrapper>
        <ItemNumber>{`${completedGoals}/${goals}`}</ItemNumber>
        <ItemTitle>GOAL</ItemTitle>
      </ItemWrapper>
    </Container>
  );
};

export default RoundGoal;
