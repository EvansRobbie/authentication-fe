"use client";
import { AuthContextProvider } from "@/context/AuthContext";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SessionProvider>
        <Toaster />
        <AuthContextProvider>{children}</AuthContextProvider>;
      </SessionProvider>
    </>
  );
};

export default GlobalProvider;
