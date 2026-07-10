import { create } from "zustand";

type SideBarStoreType = {
  isOpen: boolean;
  toggle: () => void;
  openSidebar: () => void;
  closeSidebar: () => void; 
};

export const useSidebarStore = create<SideBarStoreType>((set) => ({
  isOpen: false,

  toggle: () => set((state) => ({ isOpen: !state.isOpen })),

  openSidebar: () => set({ isOpen: true }),
  closeSidebar: () => set({ isOpen: false }),
}));
