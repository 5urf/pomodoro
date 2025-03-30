import styled from "styled-components";
import { useShallow } from "zustand/shallow";
import CtrlButton from "../components/CtrlButton";
import CompleteModal from "../components/modal/CompleteModal";
import SettingModal from "../components/modal/SettingModal";
import RoundGoal from "../components/roundGoal/RoundGoal";
import Timer from "../components/timer/Timer";
import useSettingStore from "../store/useSettingStore";
import useTimerStore from "../store/useTimerStore";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 12rem;
  gap: 8rem;
`;

const Pomodoro = () => {
  const { visible } = useSettingStore(
    useShallow((state) => ({
      visible: state.visible,
    }))
  );
  const { complete } = useTimerStore(
    useShallow((state) => ({
      complete: state.complete,
    }))
  );
  return (
    <Container>
      {visible && <SettingModal />}
      {complete && <CompleteModal />}
      <Timer />
      <CtrlButton />
      <RoundGoal />
    </Container>
  );
};

export default Pomodoro;
