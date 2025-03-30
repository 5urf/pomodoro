import { useShallow } from "zustand/shallow";
import useTimerStore from "../../store/useTimerStore";
import RoundGoalItem from "./RoundGoalItem";

const Goal = () => {
  const { goals, completedGoals } = useTimerStore(
    useShallow((state) => ({
      goals: state.goals,
      completedGoals: state.completedGoals,
    }))
  );
  const goalItemNumber = `${completedGoals}/${goals}`;
  return <RoundGoalItem itemNumber={goalItemNumber} itemTitle='GOAL' />;
};

export default Goal;
