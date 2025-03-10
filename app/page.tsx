import AboutSection from "./_components/AboutSection/AboutSection";
import HeroSection from "./_components/HeroSection/HeroSection";
import HeroSectionTitle from "./_components/HeroSection/HeroSectionTitle";
import ScrollArrow from "./_components/UI/ScrollArrow";

export default function Home() {
  return (
    <>
      <HeroSection imageUrl={"/main/bg-main@3x.jpg"}>
        <div className="gap relative z-5 flex flex-col items-center md:gap-32">
          <HeroSectionTitle>Сделано для уюта вашей души</HeroSectionTitle>
          <ScrollArrow />
        </div>
      </HeroSection>
      <AboutSection />
      <AboutSection />
      <AboutSection />
      <AboutSection />
      <AboutSection />
      <AboutSection />
    </>
  );
}

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
