"use strict";
exports.__esModule = true;
var AboutSection_1 = require("./_components/AboutSection/AboutSection");
var HeroSection_1 = require("./_components/HeroSection/HeroSection");
var HeroSectionTitle_1 = require("./_components/HeroSection/HeroSectionTitle");
var ScrollArrow_1 = require("./_components/UI/ScrollArrow");
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement(HeroSection_1["default"], { imageUrl: "/main/bg-main@3x.jpg" },
            React.createElement("div", { className: "gap relative z-5 flex flex-col items-center md:gap-32" },
                React.createElement(HeroSectionTitle_1["default"], null, "\u0421\u0434\u0435\u043B\u0430\u043D\u043E \u0434\u043B\u044F \u0443\u044E\u0442\u0430 \u0432\u0430\u0448\u0435\u0439 \u0434\u0443\u0448\u0438"),
                React.createElement(ScrollArrow_1["default"], null))),
        React.createElement(AboutSection_1["default"], null),
        React.createElement(AboutSection_1["default"], null),
        React.createElement(AboutSection_1["default"], null),
        React.createElement(AboutSection_1["default"], null),
        React.createElement(AboutSection_1["default"], null),
        React.createElement(AboutSection_1["default"], null)));
}
exports["default"] = Home;
//  <>
//       <Box sx={{ bgcolor: 'rgba(0, 0, 0, 0.1)' }}>Границы инпута</Box>
//       <Box sx={{ bgcolor: 'rgba(0, 0, 0, 0.4)' }}>Подписи в форме</Box>
//       <Box sx={{ bgcolor: 'rgba(0, 0, 0, 0.3)' }}>Цвет чекбоксов</Box>
//       <Box sx={{ bgcolor: '#1b1b1b' }}>Подложка под форму</Box>
//       <Box sx={{ bgcolor: '#202020' }}>Стрелка (цвет не нужен)</Box>
//       <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.8)' }}>Цвет текста</Box>
//       <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.6)' }}>Цвет текста</Box>
//       <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.5)' }}>Цвет текста</Box>
//       <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.4)' }}>Цвет текста</Box>
//       <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)' }}>
//         Разделительная линия в отзывах
//       </Box>
//       <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)' }}>Цвет текста</Box>
//       <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.12)' }}>Цвет текста</Box>
//       <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }}>Цвет текста</Box>
//       <Box sx={{ bgcolor: 'background.cards.0' }}>Фон карточки. Светлость 1</Box>
//       <Box sx={{ bgcolor: 'background.cards.1' }}>Фон карточки. Светлость 2</Box>
//       <Box sx={{ bgcolor: 'background.cards.2' }}>Фон карточки. Светлость 3</Box>
//       <Box sx={{ bgcolor: 'background.cards.3' }}>Фон карточки. Светлость 4</Box>
//       <Box sx={{ bgcolor: 'background.cards.4' }}>Фон карточки. Светлость 5</Box>
//     </>
