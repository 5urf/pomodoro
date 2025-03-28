import { create } from "zustand";
import useTimerStore from "./useTimerStore";

interface IBtnActionStore {
  toggleButton: () => void;
}

const useBtnActionStore = create<IBtnActionStore>(() => ({
  toggleButton: () => {
    const { isStart, startTimer, pauseTimer } = useTimerStore.getState();

    if (isStart) pauseTimer();
    else startTimer();
  },
}));

export default useBtnActionStore;
