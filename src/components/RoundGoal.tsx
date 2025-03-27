import styled from "styled-components";

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
  return (
    <Container>
      <ItemWrapper>
        <ItemNumber>0/4</ItemNumber>
        <ItemTitle>ROUND</ItemTitle>
      </ItemWrapper>
      <ItemWrapper>
        <ItemNumber>0/12</ItemNumber>
        <ItemTitle>GOAL</ItemTitle>
      </ItemWrapper>
    </Container>
  );
};

export default RoundGoal;
