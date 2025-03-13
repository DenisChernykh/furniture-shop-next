"use client";
import { MenuContextProvider } from "@/app/context/MenuContext";

import Menu from "./Menu/Menu";
import { useEffect } from "react";
import Container from "@/components/UI/Container";
import Logo from "@/components/UI/Logo";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        header.style.backgroundColor =
          window.scrollY > 0 ? "black " : "transparent";
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <MenuContextProvider>
      <header className="fixed z-10 w-full transition-all duration-300 ease-in">
        <Container className="relative flex min-h-20 items-center justify-between">
          <div className="relative z-10 flex md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <Logo />
          </div>
          <Menu />
        </Container>
      </header>
    </MenuContextProvider>
  );
}

export default Header;
