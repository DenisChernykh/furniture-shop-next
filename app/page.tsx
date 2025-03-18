import Title from "@/components/UI/Title";
import ScrollArrow from "../components/UI/ScrollArrow";
import AboutSection from "../components/AboutSection/AboutSection";
import HeroSection from "../components/shared/HeroSection/HeroSection";
import AnimatedWrapper from "@/components/UI/AnimatedWrapper";
import StatsSection from "@/components/shared/StatsSection/StatsSection";
import { Suspense } from "react";
import StatsSectionSkeleton from "@/components/shared/StatsSection/StatsSectionSkeleton";
import AboutSectionSkeleton from "../components/AboutSection/AboutSectionSkeleton";
import TeamSection from "@/components/TeamSection/TeamSection";
import TeamSectionSkeleton from "@/components/TeamSection/TeamSectionSkeleton";
import AdvantagesSection from "@/components/AdvantagesSection/AdvantagesSection";
import MaterialSection from "@/components/MaterialSection/MaterialSection";

export default function Home() {
  return (
    <>
      <HeroSection imageUrl={"/images/main/bg-main@3x.jpg"}>
        <div className="relative z-5 flex flex-col items-center gap-6 md:gap-32">
          <AnimatedWrapper triggerScroll={false}>
            <Title as="h1" size="hero" title="Сделано для уюта вашей души" />
          </AnimatedWrapper>
          <ScrollArrow targetId="about" />
        </div>
      </HeroSection>
      <Suspense fallback={<AboutSectionSkeleton />}>
        <AboutSection id="about" />
      </Suspense>
      <Suspense fallback={<StatsSectionSkeleton />}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={<TeamSectionSkeleton />}>
        <TeamSection />
      </Suspense>
      <AdvantagesSection />
      <MaterialSection />
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
