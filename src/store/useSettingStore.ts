import { create } from "zustand";

interface ISettingStore {
  visible: boolean;

  handleVisible: () => void;
}

const useSettingStore = create<ISettingStore>((set) => ({
  visible: false,

  handleVisible: () =>
    set((state) => {
      return { visible: !state.visible };
    }),
}));

export default useSettingStore;
