// context/DropdownContext.tsx
import { createContext, useState, useContext, ReactNode } from "react";

interface DropdownContextType {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

const DropdownContext = createContext<DropdownContextType>(
  {} as DropdownContextType
);

export const DropdownProvider = ({ children }: { children: ReactNode }) => {
  const [selectedOption, setSelectedOption] = useState("option1");

  return (
    <DropdownContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdown = () =>
  useContext<DropdownContextType>(DropdownContext);
