import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useShallow } from "zustand/shallow";
import { TIMER_CONSTANTS } from "../../constants";
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
  const intervalRef = useRef<number | null>(null);

  const clearIntervalHnadle = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const { isStart, countDown } = useTimerStore(
    useShallow((state) => ({
      isStart: state.isStart,
      countDown: state.countDown,
    }))
  );

  useEffect(() => {
    if (isStart) {
      intervalRef.current = setInterval(() => {
        countDown();
      }, TIMER_CONSTANTS.TIMER_INTERVAL);
    } else {
      clearIntervalHnadle();
    }
    return clearIntervalHnadle;
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
