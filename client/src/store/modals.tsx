import { create } from "zustand";
  
  export type ToggleModalProps = {
    modalIsOpen: boolean;
    showExitAlert: boolean;
    openModal: () => void;
    closeModal: () => void;
    openAlertModal: () => void;
  };

  export const useToggleModalStore = create<ToggleModalProps>((set) => ({
    modalIsOpen: false,
    showExitAlert: false,
    openModal: () => set({ modalIsOpen: true }),
    closeModal: () => set({ modalIsOpen: false }),
    openAlertModal: () => set({ showExitAlert: true }),
  }));