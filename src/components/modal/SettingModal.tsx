import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { z } from "zod";
import useSettingStore from "../../store/useSettingStore";
import useTimerStore from "../../store/useTimerStore";
import {
  backDropVariants,
  ModalBackDrop,
  ModalContainer,
  modalVariants,
} from "../../styles/modalStyles";
import FormInput from "../form/FormInput";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
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
  cursor: pointer;
  background-color: ${({ theme }) => theme.subTextColor};
  color: ${({ theme }) => theme.textColor};
  transition: all 0.18s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.modalBgColor};
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
  cursor: pointer;

  transition: color 0.18s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.subTextColor};
  }
`;

const formSchema = z.object({
  goals: z.number().min(1, { message: "0 이상으로 설정해 주세요." }),

  rounds: z.number().min(1, { message: "0 이상으로 설정해 주세요." }),
  minute: z
    .number()
    .min(1, { message: "0 이상으로 설정해 주세요." })
    .max(60, { message: "60 이하로 설정해 주세요." }),
});

type SettingFormType = z.infer<typeof formSchema>;

const SettingModal = () => {
  const { handleVisible } = useSettingStore();
  const { settingTimer, minutes, seconds, initialMinutes, rounds, goals } =
    useTimerStore();

  const { control, handleSubmit } = useForm<SettingFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      goals,
      rounds,
      minute: initialMinutes,
    },
  });

  const handleClick = () => {
    if (minutes === 0 && seconds === 0) return alert("설정을 완료해 주세요.");
    handleVisible();
  };

  const onSubmit = ({ goals, rounds, minute }: SettingFormType) => {
    settingTimer(goals, rounds, minute);
    handleVisible();
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
            <FormInput name='goals' control={control} placeholder='goals' />
          </InputWrap>
          <InputWrap>
            <SubTitle>Round</SubTitle>
            <FormInput name='rounds' control={control} placeholder='rounds' />
          </InputWrap>
          <InputWrap>
            <SubTitle>Minute</SubTitle>
            <FormInput name='minute' control={control} placeholder='minute' />
          </InputWrap>
          <ConfirmBtn type='submit'>저장</ConfirmBtn>
        </Form>
      </ModalContainer>
    </ModalBackDrop>
  );
};

export default SettingModal;
