import styled from "styled-components";
import CtrlButton from "../components/CtrlButton";
import RoundGoal from "../components/RoundGoal";
import Setting from "../components/Setting";
import SettingModal from "../components/SettingModal";
import Timer from "../components/Timer";
import useSettingStore from "../store/useSettingStore";

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
  const { visible } = useSettingStore();

  return (
    <Container>
      {visible && <SettingModal />}
      <Timer />
      <CtrlButton />
      <RoundGoal />
      <Setting />
    </Container>
  );
};

export default Pomodoro;
