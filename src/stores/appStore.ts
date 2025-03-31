import { create } from "zustand";

interface AppStoreState {
  token: string;
  appName: string;
  pageTitle: string;
  pageLoading: boolean;
  notifications: string[];
  emails: string[];
  setToken: (token: string) => void;
  setName: (appName: string) => void;
  setPageTitle: (pageTitle: string) => void;
  setPageLoading: (pageLoading: boolean) => void;
  closePageLoading: () => void;
  notificationsCount: number;
  emailsCount: number;
}

export const useAppStore = create<AppStoreState>((set, get) => ({
  token: "",

  appName: "Dipstore.",
  pageTitle: "Dipstore",
  pageLoading: true,
  notifications: ["notify"],
  emails: [],

  setToken: (token) => set({ token }),
  setName: (appName) => set({ appName }),
  setPageTitle: (pageTitle) => set({ pageTitle }),
  setPageLoading: (pageLoading: boolean) => set({ pageLoading }),
  closePageLoading: () => {},
  setClosePageLoading: (fn: () => void) => set({ closePageLoading: fn }),
  get notificationsCount() {
    return get().notifications.length;
  },
  get emailsCount() {
    return get().emails.length;
  },
}));
