import { createContext, useContext, useState, ReactNode } from "react";

type images = string[];

type ImagesProviderState = {
  imageSliders: images[]; // Use the specific type here
  setImageSliders: (imageSliders: images[]) => void; // Update the type here
};

export const GeneralProviderContext = createContext<
  ImagesProviderState | undefined
>(undefined);

export const GeneralProvider = ({ children }: { children: ReactNode }) => {
  const [imageSliders, setImageSliders] = useState<images[]>([]); // Specify the type for useState

  return (
    <GeneralProviderContext.Provider value={{ imageSliders, setImageSliders }}>
      {children}
    </GeneralProviderContext.Provider>
  );
};

export const useAddToCart = () => {
  const cart = useContext(GeneralProviderContext);
  if (cart === undefined) {
    throw new Error("useAddToCart must be used within the GeneralProvider"); // Corrected error message
  }
  return cart;
};
