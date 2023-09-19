import { create } from 'zustand';

type Store = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};
export const useStore = create<Store>((set) => ({
  count: 0,
  n: 2,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
