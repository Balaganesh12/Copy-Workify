// components/NotificationProvider.tsx
'use client';

import { message } from 'antd';
import React, { createContext, useContext } from 'react';

type MessageType = 'success' | 'info' | 'warning' | 'error' | 'loading';

interface MessageContextProps {
  showMessage: (type: MessageType, content: string, duration?: number) => void;
}

const MessageContext = createContext<MessageContextProps | undefined>(
  undefined,
);

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  const showMessage = (
    type: MessageType,
    content: string,
    duration?: number,
  ) => {
    messageApi.open({
      type,
      content,
      duration: duration || 3,
    });
  };

  return (
    <MessageContext.Provider value={{ showMessage }}>
      {contextHolder}
      {children}
    </MessageContext.Provider>
  );
};

// Custom hook for consuming messages easily
export const useMessage = (): MessageContextProps => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessage must be used within a MessageProvider');
  }
  return context;
};
