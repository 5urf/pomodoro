import { motion, Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import useSettingStore from "../store/useSettingStore";
import useTimerStore from "../store/useTimerStore";

const ModalBackDrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled(motion.div)`
  position: relative;
  background-color: ${({ theme }) => theme.modalBgColor};
  padding: 5rem;
  border-radius: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const ErrorMsg = styled.small`
  color: red;
  font-size: 1rem;
`;

const Title = styled.h3`
  font-size: 2.6rem;
  font-weight: 500;
  margin-bottom: 2rem;
  text-align: center;
`;

const SubTitle = styled.p`
  font-size: 1.6rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 0.8rem;
  border: none;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const ConfirmBtn = styled.button`
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

const CloseBtn = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  border: none;
  background: none;
  padding: 2rem;
  font-size: 1.8rem;
`;

const modalVariants: Variants = {
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

const backDropVariants: Variants = {
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

interface ISettingForm {
  minute: number;
  round: number;
  goal: number;
}

const SettingModal = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISettingForm>();
  const { handleVisible } = useSettingStore();
  const { settingTimer } = useTimerStore();
  const onSubmit = ({ goal, round, minute }: ISettingForm) => {
    settingTimer(Number(goal), Number(round), Number(minute));
    handleVisible();
  };

  return (
    <ModalBackDrop
      variants={backDropVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.3 }}
      onClick={handleVisible}
    >
      <ModalContainer
        variants={modalVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseBtn onClick={handleVisible}>✖︎</CloseBtn>
        <Title>설정</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrap>
            <SubTitle>Goal</SubTitle>
            <Input
              type='number'
              placeholder='goal'
              {...register("goal", {
                required: "goal을 설정해 주세요.",
              })}
            />
            <ErrorMsg>{errors.goal?.message}</ErrorMsg>
          </InputWrap>
          <InputWrap>
            <SubTitle>Round</SubTitle>
            <Input
              type='number'
              placeholder='round'
              {...register("round", {
                required: "round를 설정해 주세요.",
              })}
            />
            <ErrorMsg>{errors.round?.message}</ErrorMsg>
          </InputWrap>
          <InputWrap>
            <SubTitle>Minute</SubTitle>
            <Input
              type='number'
              placeholder='minute'
              {...register("minute", {
                required: "minute를 설정해 주세요.",
              })}
            />
            <ErrorMsg>{errors.minute?.message}</ErrorMsg>
          </InputWrap>
          <ConfirmBtn type='submit'>확인</ConfirmBtn>
        </Form>
      </ModalContainer>
    </ModalBackDrop>
  );
};

export default SettingModal;
