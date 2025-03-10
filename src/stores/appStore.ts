import { create } from "zustand";

interface AppStoreState {
  appName: string;
  pageTitle: string;
  notifications: string[];
  emails: string[];
  setName: (appName: string) => void;
  setPageTitle: (pageTitle: string) => void;
  notificationsCount: number;
  emailsCount: number;
}

export const useAppStore = create<AppStoreState>((set, get) => ({
  appName: "Dipstore.",
  pageTitle: "Dipstore",
  notifications: ["notify"],
  emails: [],

  setName: (appName) => set({ appName }),
  setPageTitle: (pageTitle) => set({ pageTitle }),
  get notificationsCount() {
    return get().notifications.length;
  },
  get emailsCount() {
    return get().emails.length;
  },
}));
