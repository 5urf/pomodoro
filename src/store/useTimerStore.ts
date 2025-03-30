import { create } from "zustand";

interface ITimerState {
  initialMinutes: number;
  minutes: number;
  seconds: number;
  isStart: boolean;
  rounds: number;
  goals: number;
  completedRounds: number;
  completedGoals: number;
  complete: boolean;
}

interface ITimerStore extends ITimerState {
  startTimer: () => void;
  pauseTimer: () => void;
  settingTimer: (goals: number, rounds: number, minutes: number) => void;
  resetTimer: () => void;
  countDown: () => void;
  completeRound: () => void;
}

const initialState: ITimerState = {
  initialMinutes: 25,
  minutes: 25,
  seconds: 0,
  isStart: false,
  rounds: 4,
  goals: 12,
  completedRounds: 0,
  completedGoals: 0,
  complete: false,
};

const useTimerStore = create<ITimerStore>((set, get) => ({
  ...initialState,

  startTimer: () => set({ isStart: true }),
  pauseTimer: () => set({ isStart: false }),

  settingTimer: (goals, rounds, minutes) =>
    set({
      goals,
      rounds,
      minutes,
      initialMinutes: minutes,
      seconds: 0,
      completedRounds: 0,
      completedGoals: 0,
      complete: false,
      isStart: false,
    }),

  resetTimer: () =>
    set(() => ({
      minutes: 0,
      seconds: 0,
      isStart: false,
      complete: false,
      completedRounds: 0,
      completedGoals: 0,
    })),

  countDown: () => {
    const state = get();

    if (state.minutes === 0 && state.seconds === 0) {
      get().completeRound();
      return;
    }

    set({
      minutes: state.seconds === 0 ? state.minutes - 1 : state.minutes,
      seconds: state.seconds === 0 ? 59 : state.seconds - 1,
    });
  },

  completeRound: () =>
    set((state) => {
      const newCompletedRounds = state.completedRounds + 1;
      const isGoalCompleted = newCompletedRounds === state.rounds;

      const newCompletedRoundsAdjusted = isGoalCompleted
        ? 0
        : newCompletedRounds;

      const newCompletedGoals = isGoalCompleted
        ? state.completedGoals + 1
        : state.completedGoals;

      const isCompleted = newCompletedGoals === state.goals;

      return {
        minutes: isCompleted ? 0 : state.initialMinutes,
        seconds: 0,
        isStart: false,
        completedRounds: newCompletedRoundsAdjusted,
        completedGoals: newCompletedGoals,
        complete: isCompleted,
      };
    }),
}));

export default useTimerStore;
