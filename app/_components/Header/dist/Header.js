"use client";
"use strict";
exports.__esModule = true;
var MenuContext_1 = require("@/app/context/MenuContext");
var Container_1 = require("../UI/Container");
var Logo_1 = require("../UI/Logo");
var Menu_1 = require("./Menu/Menu");
var react_1 = require("react");
function Header() {
    react_1.useEffect(function () {
        var handleScroll = function () {
            var header = document.querySelector("header");
            if (header) {
                header.style.backgroundColor =
                    window.scrollY > 0 ? "black " : "transparent";
            }
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    return (React.createElement(MenuContext_1.MenuContextProvider, null,
        React.createElement("header", { className: "fixed z-10 w-full transition-all duration-300 ease-in" },
            React.createElement(Container_1["default"], { className: "relative flex min-h-20 items-center justify-between" },
                React.createElement("div", { className: "relative z-10 flex md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2" },
                    React.createElement(Logo_1["default"], null)),
                React.createElement(Menu_1["default"], null)))));
}
exports["default"] = Header;
