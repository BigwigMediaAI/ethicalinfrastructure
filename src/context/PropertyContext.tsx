"use client";
import { createContext, useContext, useState } from "react";

interface PropertyContextType {
  selectedType: string | null;
  setSelectedType: (type: string | null) => void;
}

const PropertyContext = createContext<PropertyContextType | undefined>(
  undefined
);

export const PropertyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <PropertyContext.Provider value={{ selectedType, setSelectedType }}>
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => {
  const context = useContext(PropertyContext);
  if (!context)
    throw new Error("useProperty must be used within PropertyProvider");
  return context;
};
