import { motion, Variants } from "framer-motion";
import styled from "styled-components";

export const ModalBackDrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled(motion.div)`
  position: relative;
  background-color: ${({ theme }) => theme.modalBgColor};
  backdrop-filter: blur(20px);
  padding: 5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const modalVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
  },
};

export const backDropVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
