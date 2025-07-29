import { motion } from "framer-motion";
import styled from "styled-components";

const TimeBox = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 30rem;
  border-radius: 2rem;

  background: ${({ theme }) => theme.accentColor};
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.25);

  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.2),
    0 4px 16px rgba(118, 75, 162, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2);

  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(102, 126, 234, 0.25),
      0 8px 24px rgba(118, 75, 162, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }
`;

const Text = styled.p`
  font-size: 6.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.textColor};
  user-select: none;

  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
`;

const timeVariants = {
  initial: {
    scale: 0.9,
    opacity: 0.6,
    rotateY: -15,
  },
  animate: {
    scale: 1,
    opacity: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
      duration: 0.6,
    },
  },
  exit: {
    scale: 0.9,
    opacity: 0.6,
    rotateY: 15,
    transition: {
      duration: 0.3,
    },
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
