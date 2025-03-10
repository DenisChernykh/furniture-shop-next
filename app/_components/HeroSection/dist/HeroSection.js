"use strict";
exports.__esModule = true;
var Container_1 = require("@/components/UI/Container");
var image_1 = require("next/image");
function HeroSection(_a) {
    var imageUrl = _a.imageUrl, children = _a.children;
    return (React.createElement("section", null,
        React.createElement(Container_1["default"], { className: "flex h-screen flex-col justify-end pt-20 pb-11 md:pb-36" },
            React.createElement("div", { className: "absolute inset-0 z-0" },
                React.createElement(image_1["default"], { className: "object-cover", src: imageUrl, alt: "\u0417\u0430\u0434\u043D\u0438\u0439 \u0444\u043E\u043D", fill: true }),
                React.createElement("div", { style: {
                        background: "\n\t\t\t\t\t\tlinear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 24.63%),\n\t\t\t\t\t\tlinear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgb(0, 0, 0) 100%)\n\t\t\t\t\t\t"
                    }, className: "absolute inset-0" })),
            children)));
}
exports["default"] = HeroSection;
