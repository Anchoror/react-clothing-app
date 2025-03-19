import { create } from "zustand";

interface AppStoreState {
  appName: string;
  pageTitle: string;
  pageLoading: boolean;
  notifications: string[];
  emails: string[];
  setName: (appName: string) => void;
  setPageTitle: (pageTitle: string) => void;
  setPageLoading: (pageLoading: boolean) => void;
  notificationsCount: number;
  emailsCount: number;
}

export const useAppStore = create<AppStoreState>((set, get) => ({
  appName: "Dipstore.",
  pageTitle: "Dipstore",
  pageLoading: true,
  notifications: ["notify"],
  emails: [],

  setName: (appName) => set({ appName }),
  setPageTitle: (pageTitle) => set({ pageTitle }),
  setPageLoading: (pageLoading) => set({ pageLoading }),
  get notificationsCount() {
    return get().notifications.length;
  },
  get emailsCount() {
    return get().emails.length;
  },
}));
