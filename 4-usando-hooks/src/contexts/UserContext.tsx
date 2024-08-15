// UserContext.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface UserContextType {
  name: string;
  age: number;
  setName: (name: string) => void;
  setAge: (age: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);

  return (
    <UserContext.Provider value={{ name, age, setName, setAge }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};