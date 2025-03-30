import { useShallow } from "zustand/shallow";
import useTimerStore from "../../store/useTimerStore";
import RoundGoalItem from "./RoundGoalItem";

const Round = () => {
  const { rounds, completedRounds } = useTimerStore(
    useShallow((state) => ({
      rounds: state.rounds,
      completedRounds: state.completedRounds,
    }))
  );
  const roundItemNumber = `${completedRounds}/${rounds}`;
  return <RoundGoalItem itemNumber={roundItemNumber} itemTitle='ROUND' />;
};

export default Round;
