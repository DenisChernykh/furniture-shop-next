import HeroSection from "@/components/shared/HeroSection/HeroSection";
import AnimatedWrapper from "@/components/UI/AnimatedWrapper";
import ScrollArrow from "@/components/UI/ScrollArrow";
import Title from "@/components/UI/Title";

function AboutPage() {
  return (
    <HeroSection imageUrl={"/images/for-designers/main@3x.jpg"}>
      <div className="relative z-5 flex flex-col items-center gap-6 md:gap-32">
        <AnimatedWrapper triggerScroll={true}>
          <Title
            as="h1"
            size="hero"
            title="Мы создаем мебель для вашего комфорта и уюта"
          />
        </AnimatedWrapper>
        <ScrollArrow targetId="about" />
      </div>
    </HeroSection>
  );
}

export default AboutPage;
