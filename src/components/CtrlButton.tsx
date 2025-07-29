import { motion, Variants } from "framer-motion";
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
  padding: 1rem;
  background-color: rgba(76, 82, 93, 0.8);
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

const btnVariants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  tap: {
    scale: 0.8,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
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
        {!isStart ? <PlayIcon /> : <PauseIcon />}
      </Btn>
    </Container>
  );
};

export default CtrlButton;
