import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePersistantDemoStore = create(
    persist(
        (set) => ({
            value: "Hello State!",
            modify: () => set(() => ({ value: "Hello New State!"})),
        }),
        { name: "demo-storage" }
    )
);

export const useDemoStore = create((set) => ({
    value: "Hello State!",
    modify: () => set(() => ({ value: "Hello New State!"}))
}));

