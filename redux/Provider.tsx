"use client";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { makeStore } from "./makeStore";
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

axios.defaults.baseURL = apiUrl;

type ProviderProps = {
  children: React.ReactNode;
};

export function Provider({ children }: ProviderProps) {
  return <ReduxProvider store={makeStore()}>{children}</ReduxProvider>;
}
