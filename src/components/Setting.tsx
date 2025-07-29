import { motion } from "framer-motion";
import styled from "styled-components";
import { useShallow } from "zustand/shallow";
import SettingIcon from "../assets/SettingIcon";
import useSettingStore from "../store/useSettingStore";
import useTimerStore from "../store/useTimerStore";

const Btn = styled(motion.button)`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.6rem;
  height: 5.6rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.25);

  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.2),
    0 2px 8px rgba(118, 75, 162, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2);

  color: ${({ theme }) => theme.textColor};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.18);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.25),
      0 4px 12px rgba(118, 75, 162, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const btnVariants = {
  initial: {
    scale: 1,
    rotate: 0,
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

const iconVariants = {
  initial: {
    rotate: 0,
  },
  hover: {
    rotate: 45,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  tap: {
    rotate: 90,
    transition: {
      duration: 0.2,
    },
  },
};

const Setting = () => {
  const { handleVisible } = useSettingStore(
    useShallow((state) => ({
      handleVisible: state.handleVisible,
    }))
  );
  const { pauseTimer } = useTimerStore(
    useShallow((state) => ({
      pauseTimer: state.pauseTimer,
    }))
  );

  const onClick = () => {
    pauseTimer();
    handleVisible();
  };

  return (
    <Btn
      variants={btnVariants}
      initial='initial'
      whileHover='hover'
      whileTap='tap'
      onClick={onClick}
    >
      <IconWrapper
        variants={iconVariants}
        initial='initial'
        whileHover='hover'
        whileTap='tap'
      >
        <SettingIcon />
      </IconWrapper>
    </Btn>
  );
};

export default Setting;
