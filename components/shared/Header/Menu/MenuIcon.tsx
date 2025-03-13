"use client";
import { useToggleMenu } from "@/app/context/MenuContext";
import cn from "classnames";

function MenuIcon() {
  const { isOpen, toggleMenu } = useToggleMenu();
  return (
    <button
      onClick={toggleMenu}
      className={cn(
        "relative z-10 h-8 w-8 rounded-full border-1 border-white md:block",
      )}
    >
      <span
        className={cn(
          "absolute top-[10px] left-1/2 block h-[1px] w-[70%] -translate-x-1/2 bg-white transition-transform duration-1000",
          {
            "top-1/2 translate-y-[4px] -rotate-45 transform": isOpen,
          },
        )}
      ></span>
      <span
        className={cn(
          "absolute bottom-[10px] left-1/2 block h-[1px] w-[70%] -translate-x-1/2 bg-white transition-transform duration-1000",
          { "bottom-1/2 -translate-y-[5px] rotate-45 transform": isOpen },
        )}
      ></span>
    </button>
  );
}

export default MenuIcon;
