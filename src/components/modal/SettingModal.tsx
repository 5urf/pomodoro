import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { z } from "zod";
import useSettingStore from "../../store/useSettingStore";
import useTimerStore from "../../store/useTimerStore";
import FormInput from "../form/FormInput";
import {
  backDropVariants,
  ModalBackDrop,
  ModalContainer,
  modalVariants,
} from "./CommonModal";

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

const formSchema = z.object({
  goal: z.number().min(1, { message: "0 이상으로 설정해 주세요." }),
  round: z.number().min(1, { message: "0 이상으로 설정해 주세요." }),
  minute: z.number().min(1, { message: "0 이상으로 설정해 주세요." }),
});

type SettingFormType = z.infer<typeof formSchema>;

const SettingModal = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      goal: 12,
      round: 4,
      minute: 25,
    },
  });
  const { handleVisible } = useSettingStore();
  const { settingTimer, resetTimer, minutes } = useTimerStore();

  const handleClick = () => {
    if (minutes === 0) return alert("설정을 완료해 주세요.");
    handleVisible();
  };

  const onSubmit = ({ goal, round, minute }: SettingFormType) => {
    settingTimer(goal, round, minute);
    handleVisible();
    resetTimer();
  };

  return (
    <ModalBackDrop
      variants={backDropVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.3 }}
      onClick={handleClick}
    >
      <ModalContainer
        variants={modalVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseBtn onClick={handleClick}>✖︎</CloseBtn>
        <Title>설정</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrap>
            <SubTitle>Goal</SubTitle>
            <FormInput name='goal' control={control} placeholder='goal' />
            <ErrorMsg>{errors.goal?.message}</ErrorMsg>
          </InputWrap>
          <InputWrap>
            <SubTitle>Round</SubTitle>
            <FormInput name='round' control={control} placeholder='goal' />
            <ErrorMsg>{errors.round?.message}</ErrorMsg>
          </InputWrap>
          <InputWrap>
            <SubTitle>Minute</SubTitle>
            <FormInput name='minute' control={control} placeholder='goal' />
            <ErrorMsg>{errors.minute?.message}</ErrorMsg>
          </InputWrap>
          <ConfirmBtn type='submit'>확인</ConfirmBtn>
        </Form>
      </ModalContainer>
    </ModalBackDrop>
  );
};

export default SettingModal;
