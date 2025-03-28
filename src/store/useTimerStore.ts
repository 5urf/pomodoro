import { create } from "zustand";

interface ITimerStore {
  minutes: number;
  seconds: number;
  isStart: boolean;
  rounds: number;
  goals: number;
  completedRounds: number;
  completedGoals: number;
  complete: boolean;

  startTimer: () => void;
  pauseTimer: () => void;
  settingTimer: (goals: number, rounds: number, minutes: number) => void;
  resetTimer: () => void;
  countDown: () => void;
  completeRound: () => void;
}

const useTimerStore = create<ITimerStore>((set) => ({
  minutes: 25,
  seconds: 0,
  isStart: false,
  rounds: 4,
  goals: 12,
  completedRounds: 0,
  completedGoals: 0,
  complete: false,

  startTimer: () => set({ isStart: true }),
  pauseTimer: () => set({ isStart: false }),

  settingTimer: (goals: number, rounds: number, minutes: number) =>
    set({
      goals,
      rounds,
      minutes,
    }),

  resetTimer: () =>
    set((state) => ({
      minutes: state.minutes,
      seconds: 0,
      isStart: false,
      complete: false,
      completedRounds: 0,
      completedGoals: 0,
    })),

  countDown: () =>
    set((state) => {
      if (state.seconds === 0) {
        if (state.minutes === 0) {
          state.pauseTimer();
          state.completeRound();
          return { minutes: state.minutes, seconds: 0 };
        } else {
          return { minutes: state.minutes - 1, seconds: 59 };
        }
      } else {
        return { seconds: state.seconds - 1 };
      }
    }),

  completeRound: () =>
    set((state) => {
      const newCompletedRounds = state.completedRounds + 1;
      if (newCompletedRounds === state.rounds) {
        const newCompletedGoals = state.completedGoals + 1;
        if (newCompletedGoals >= state.goals) {
          set({ complete: true });
        }
        return { completedRounds: 0, completedGoals: newCompletedGoals };
      }
      return { completedRounds: newCompletedRounds };
    }),
}));

export default useTimerStore;
