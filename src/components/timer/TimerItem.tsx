import { motion, Variants } from "framer-motion";
import styled from "styled-components";

const TimeBox = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 30rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.accentColor};
`;

const Text = styled.p`
  font-size: 6.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};
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

interface ITimerItem {
  timerItemKey: string;
  displayTime: string;
}

const TimerItem = ({ timerItemKey, displayTime }: ITimerItem) => {
  return (
    <TimeBox
      key={timerItemKey}
      variants={timeVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Text>{displayTime}</Text>
    </TimeBox>
  );
};

export default TimerItem;
