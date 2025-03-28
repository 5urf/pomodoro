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
  font-size: 4.6rem;
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
  },
  exit: {
    scale: 0.8,
  },
};

const Timer = () => {
  const { minutes, seconds, isStart, countDown } = useTimerStore();

  const minuteKey = String(minutes).padStart(2, "0");
  const secondKey = String(seconds).padStart(2, "0");

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
        key={minuteKey}
        variants={timeVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Text>{minuteKey}</Text>
      </Minute>
      <Colon>:</Colon>
      <Second
        key={secondKey}
        variants={timeVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Text>{secondKey}</Text>
      </Second>
    </Container>
  );
};

export default Timer;
