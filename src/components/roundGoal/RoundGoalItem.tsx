import styled from "styled-components";

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

const ItemTitle = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.subTextColor};
`;

const ItemNumber = styled(ItemTitle)`
  opacity: 0.8;
`;

interface IRoundGoalItem {
  itemNumber: string;
  itemTitle: string;
}

const RoundGoalItem = ({ itemNumber, itemTitle }: IRoundGoalItem) => {
  return (
    <ItemWrapper>
      <ItemNumber>{itemNumber}</ItemNumber>
      <ItemTitle>{itemTitle}</ItemTitle>
    </ItemWrapper>
  );
};

export default RoundGoalItem;
