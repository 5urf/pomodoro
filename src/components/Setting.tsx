import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import SettingIcon from "../assets/SettingIcon";
import useSettingStore from "../store/useSettingStore";
import useTimerStore from "../store/useTimerStore";

const Btn = styled(motion.button)`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  padding: 1rem;
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

const Setting = () => {
  const { handleVisible } = useSettingStore();
  const { pauseTimer } = useTimerStore();

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
      <SettingIcon />
    </Btn>
  );
};

export default Setting;
