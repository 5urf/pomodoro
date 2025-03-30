import { useShallow } from "zustand/shallow";
import useTimerStore from "../../store/useTimerStore";
import TimerItem from "./TimerItem";

const Minute = () => {
  const { minutes } = useTimerStore(
    useShallow((state) => ({
      minutes: state.minutes,
    }))
  );
  const minuteKey = `m-${minutes}`;
  const displayMinute = String(minutes).padStart(2, "0");

  return <TimerItem timerItemKey={minuteKey} displayTime={displayMinute} />;
};

export default Minute;
