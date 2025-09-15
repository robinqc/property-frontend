"use client";
import { createContext, useCallback, useEffect, useMemo, useState } from "react";

interface StateContextProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  minPrice?: number;
  maxPrice?: number;
  setMinPrice?: (price: number) => void;
  setMaxPrice?: (price: number) => void;
}

const StateContext = createContext<StateContextProps | null>(null);

const StateContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);

  const contextValue = useMemo<StateContextProps>(
    () => ({ searchTerm, setSearchTerm, minPrice, setMinPrice, maxPrice, setMaxPrice }),
    [searchTerm, setSearchTerm, minPrice, setMinPrice, maxPrice, setMaxPrice]
  );

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

export { StateContextProvider, StateContext };