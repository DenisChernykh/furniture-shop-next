import { fetchAboutData } from "@/utils/actions";

import AnimatedWrapper from "@/components/UI/AnimatedWrapper";
import Title from "@/components/UI/Title";
import Description from "./AnimatedDescription";
import SectionWrapper from "@/components/UI/SectionWrapper";
type AboutSectionProps = {
  id?: string;
};
async function AboutSection({ id }: AboutSectionProps) {
  const data = await fetchAboutData();

  return (
    <SectionWrapper id={id}>
      <div className="block overflow-hidden md:grid md:grid-cols-2 md:gap-4">
        <AnimatedWrapper>
          <Title size="section" as="h2" title={data[0].title} />
        </AnimatedWrapper>
        <AnimatedWrapper>
          <Description description={data[0].description} />
        </AnimatedWrapper>
      </div>
    </SectionWrapper>
  );
}

export default AboutSection;
