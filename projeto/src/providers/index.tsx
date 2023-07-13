"use client";

import { Provider } from "react-redux";

import { reduxStore } from "@/redux/store";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={reduxStore}>{children}</Provider>;
};
