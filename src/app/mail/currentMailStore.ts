import { create } from "zustand";
import { mail } from "@/types/mail";

interface MailStore {
  selectedMail: mail | null;
  setSelectedMail: (mail: mail) => void;
  clearSelectedMail: () => void;
}

export const currentMailStore = create<MailStore>((set) => ({
  selectedMail: null,
  setSelectedMail: (mail) => set({ selectedMail: mail }),
  clearSelectedMail: () => set({ selectedMail: null }),
}));
