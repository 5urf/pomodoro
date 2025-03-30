import { useEffect } from "react";
import styled from "styled-components";
import { useShallow } from "zustand/shallow";
import useTimerStore from "../../store/useTimerStore";
import Minute from "./Minute";
import Seconds from "./Seconds";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const Colon = styled.p`
  font-size: 6.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};
  opacity: 0.5;
`;

const Timer = () => {
  const { isStart, countDown } = useTimerStore(
    useShallow((state) => ({
      isStart: state.isStart,
      countDown: state.countDown,
    }))
  );

  useEffect(() => {
    let interverId: number | undefined;
    if (isStart) {
      interverId = setInterval(() => {
        countDown();
      }, 1000);
    } else {
      clearInterval(interverId);
    }
    return () => clearInterval(interverId);
  }, [isStart, countDown]);

  return (
    <Container>
      <Minute />
      <Colon>:</Colon>
      <Seconds />
    </Container>
  );
};

export default Timer;
