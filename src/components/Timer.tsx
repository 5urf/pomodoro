import { motion, Variants } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import useTimerStore from "../store/useTimerStore";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const Minute = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 30rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.accentColor};
`;

const Second = styled(Minute)``;

const Text = styled.p`
  font-size: 6.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};
`;

const Colon = styled(Text)`
  opacity: 0.5;
`;

const timeVariants: Variants = {
  initial: {
    scale: 0.8,
  },
  animate: {
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  exit: {
    scale: 0.8,
  },
};

const Timer = () => {
  const { minutes, seconds, isStart, countDown } = useTimerStore();

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
      <Minute
        key={`m-${minutes}`}
        variants={timeVariants}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <Text>{displayMinute}</Text>
      </Minute>
      <Colon>:</Colon>
      <Second
        key={`s-${seconds}`}
        variants={timeVariants}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <Text>{displaySeconds}</Text>
      </Second>
    </Container>
  );
};

export default Timer;
