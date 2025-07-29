import { Variants } from "framer-motion";
import styled from "styled-components";
import { useShallow } from "zustand/shallow";
import useSettingStore from "../../store/useSettingStore";
import useTimerStore from "../../store/useTimerStore";
import {
  backDropVariants,
  ModalBackDrop,
  ModalContainer,
} from "../../styles/modalStyles";

const Title = styled.h3`
  font-size: 2.6rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 2rem;
`;

const Btn = styled.button`
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  font-size: 1.6rem;
  cursor: pointer;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: ${({ theme }) => theme.textColor};
  transition: all 0.18s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  }
`;

const completeModalVariants: Variants = {
  initial: { opacity: 0, y: "-50px", scale: 0.8 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const CompleteModal = () => {
  const { handleVisible } = useSettingStore(
    useShallow((state) => ({
      handleVisible: state.handleVisible,
    }))
  );
  const { resetTimer } = useTimerStore(
    useShallow((state) => ({
      resetTimer: state.resetTimer,
    }))
  );

  const onClick = () => {
    resetTimer();
    handleVisible();
  };
  return (
    <ModalBackDrop
      variants={backDropVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.3 }}
    >
      <ModalContainer
        variants={completeModalVariants}
        initial='initial'
        animate='animate'
      >
        <Title>🎉 Congratulations! 🎉</Title>
        <Paragraph>목표 달성! 축하합니다!</Paragraph>
        <Btn onClick={onClick}>다시 시작하기</Btn>
      </ModalContainer>
    </ModalBackDrop>
  );
};

export default CompleteModal;
