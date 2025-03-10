"use strict";
exports.__esModule = true;
var classnames_1 = require("classnames");
var motion = require("motion/react-client");
function HeroSectionTitle(_a) {
    var children = _a.children, classNames = _a.classNames;
    return (React.createElement(motion.h1, { initial: { x: "-100%", opacity: 0 }, animate: { x: 0, opacity: 1 }, transition: { duration: 0.6 }, viewport: { once: true }, className: classnames_1["default"]("text-hero md:text-hero-md sm:text-hero-sm lg:text-hero-lg xl:text-hero-xl 2xl:text-hero-2xl font-brewery text-center", classNames) }, children));
}
exports["default"] = HeroSectionTitle;
