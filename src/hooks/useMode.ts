import { create } from "zustand";

type Mode = "Organization" | "corridors";

interface ModeState {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export const useMode = create<ModeState>((set) => ({
  mode: "Organization",
  setMode: (mode) => set({ mode }),
}));