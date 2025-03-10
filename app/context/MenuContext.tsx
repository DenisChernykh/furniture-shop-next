import { createContext, useContext, useState } from "react";

interface MenuContextType {
  isOpen: boolean;
  toggleMenu: () => void;
}
const MenuContext = createContext<MenuContextType | undefined>(undefined);

function MenuContextProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleMenu() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
function useToggleMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("MenuContext was used outside of DarkModeProvider");
  }
  return context;
}
export { useToggleMenu, MenuContextProvider };
