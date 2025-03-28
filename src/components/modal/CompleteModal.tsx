import styled from "styled-components";
import useSettingStore from "../../store/useSettingStore";
import useTimerStore from "../../store/useTimerStore";
import {
  backDropVariants,
  ModalBackDrop,
  ModalContainer,
  modalVariants,
} from "./CommonModal";

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
  background-color: ${({ theme }) => theme.subTextColor};
  color: ${({ theme }) => theme.textColor};

  transition: color 0.1s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;

const CompleteModal = () => {
  const { handleVisible } = useSettingStore();
  const { resetTimer } = useTimerStore();

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
        variants={modalVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Title>🎊 축하합니다 🎊</Title>
        <Paragraph>당신은 목표 달성에 성공했습니다.</Paragraph>
        <Btn onClick={onClick}>다시 시작하기</Btn>
      </ModalContainer>
    </ModalBackDrop>
  );
};

export default CompleteModal;
