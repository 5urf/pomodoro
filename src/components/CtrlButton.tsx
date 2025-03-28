import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import PauseIcon from "../assets/PauseIcon";
import PlayIcon from "../assets/PlayIcon";
import useBtnActionStore from "../store/useBtnActionStore";
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
  background-color: ${({ theme }) => theme.accentColor};
  border: none;
  border-radius: 50%;
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
  const { toggleButton } = useBtnActionStore();
  const { isStart } = useTimerStore();

  return (
    <Container>
      <Btn
        variants={btnVariants}
        initial='initial'
        whileHover='hover'
        whileTap='tap'
        onClick={toggleButton}
      >
        {!isStart ? <PlayIcon /> : <PauseIcon />}
      </Btn>
    </Container>
  );
};

export default CtrlButton;
