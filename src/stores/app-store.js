import { create } from 'zustand';

export const useAppStore = create((set) => ({
    user: 'Bintang',
    cupOfCoffee: 1,

    increase: () => {
        set((state) => ({
            cupOfCoffee: state.cupOfCoffee + 1,
        }));
    },

    decrease: () => {
        set((state) => ({
            cupOfCoffee: state.cupOfCoffee - 1,
        }))
    },

    username: 'bintangyoga',
    updateUsername: (username) => set({ username }),
}));