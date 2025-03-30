import { useShallow } from "zustand/shallow";
import useTimerStore from "../../store/useTimerStore";
import TimerItem from "./TimerItem";

const Seconds = () => {
  const { seconds } = useTimerStore(
    useShallow((state) => ({
      seconds: state.seconds,
    }))
  );
  const secondKey = `s-${seconds}`;
  const displaySeconds = String(seconds).padStart(2, "0");

  return <TimerItem timerItemKey={secondKey} displayTime={displaySeconds} />;
};

export default Seconds;
