import { useEffect } from "react";
import styled from "styled-components";
import useTimerStore from "../../store/useTimerStore";
import TimerItem from "./TimerItem";

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
  const { minutes, seconds, isStart, countDown } = useTimerStore();

  const minuteKey = `m-${minutes}`;
  const secondKey = `s-${seconds}`;
  const displayMinute = String(minutes).padStart(2, "0");
  const displaySeconds = String(seconds).padStart(2, "0");

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
      <TimerItem timerItemKey={minuteKey} displayTime={displayMinute} />
      <Colon>:</Colon>
      <TimerItem timerItemKey={secondKey} displayTime={displaySeconds} />
    </Container>
  );
};

export default Timer;
