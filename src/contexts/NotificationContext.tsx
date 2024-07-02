"use client";

import { createContext, useContext, useState } from "react";

export type NotificationContext = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  text: string;
  setText: (v: string) => void;
};

const defaultNotificationValues = {
  isOpen: false,
  setIsOpen: () => {},
  text: "",
  setText: () => {},
};

const NotificationContext = createContext<NotificationContext>(defaultNotificationValues);

export type NotificationProviderProps = {
  children?: React.ReactNode;
};

export function NotificationProvider(props: NotificationProviderProps) {
  const { children } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [text, setText] = useState("");

  return (
    <NotificationContext.Provider
      value={{
        isOpen,
        text,
        setIsOpen,
        setText,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotificationContext() {
  return useContext(NotificationContext);
}
