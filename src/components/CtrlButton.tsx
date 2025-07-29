import { motion } from "framer-motion";
import styled from "styled-components";
import { useShallow } from "zustand/shallow";
import PauseIcon from "../assets/PauseIcon";
import PlayIcon from "../assets/PlayIcon";
import useTimerStore from "../store/useTimerStore";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Btn = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 7rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3),
    0 4px 16px rgba(118, 75, 162, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2);

  color: ${({ theme }) => theme.textColor};
  transition: all 0.4s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 16px 48px rgba(102, 126, 234, 0.4),
      0 8px 24px rgba(118, 75, 162, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }
`;

const PulseRing = styled(motion.div)`
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 2px solid rgba(196, 181, 253, 0.4);
  opacity: 0;
`;

const btnVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
};

const pulseVariants = {
  idle: {
    scale: 1,
    opacity: 0,
  },
  active: {
    scale: [1, 1.15, 1],
    opacity: [0.6, 0.2, 0.6],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const CtrlButton = () => {
  const { toggleTimer, isStart } = useTimerStore(
    useShallow((state) => ({
      toggleTimer: state.toggleTimer,
      isStart: state.isStart,
    }))
  );

  return (
    <Container>
      <Btn
        variants={btnVariants}
        initial='initial'
        whileHover='hover'
        whileTap='tap'
        onClick={toggleTimer}
      >
        <PulseRing
          variants={pulseVariants}
          animate={isStart ? "active" : "idle"}
        />
        {!isStart ? <PlayIcon /> : <PauseIcon />}
      </Btn>
    </Container>
  );
};

export default CtrlButton;
