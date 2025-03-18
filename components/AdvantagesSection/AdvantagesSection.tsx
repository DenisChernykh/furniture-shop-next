import { fetchAdvantagesData } from "@/utils/actions";
import AnimatedWrapper from "../UI/AnimatedWrapper";
import LinkButton from "../UI/LinkButton";
import SectionWrapper from "../UI/SectionWrapper";
import Title from "../UI/Title";
import AdvantagesList from "./AdvantagesList";

async function AdvantagesSection() {
  const { title, advantages } = await fetchAdvantagesData();
  return (
    <SectionWrapper>
      <div className="flex grid-cols-2 flex-col md:grid">
        <AnimatedWrapper className="mb-5 md:mb-0">
          <Title size="section" as="h2" title={title} />
        </AnimatedWrapper>
        <LinkButton
          className="order-1 md:col-start-1 md:self-end"
          title="Оставить заявку"
          link="#"
        />
        <AnimatedWrapper className="col-start-2 row-start-1 row-end-3 mb-10 md:mb-0">
          <AdvantagesList advantages={advantages} />
        </AnimatedWrapper>
      </div>
    </SectionWrapper>
  );
}

export default AdvantagesSection;
