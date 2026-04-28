import { create } from "zustand";

type Mode = "foundation" | "corridors";

interface ModeState {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export const useMode = create<ModeState>((set) => ({
  mode: "foundation",
  setMode: (mode) => set({ mode }),
}));