import { fetchAdvantagesData } from "@/utils/actions";
import AnimatedWrapper from "../UI/AnimatedWrapper";
import LinkButton from "../UI/LinkButton";
import SectionWrapper from "../UI/SectionWrapper";
import Title from "../UI/Title";
import AdvantagesList from "./AdvantagesList/AdvantagesList";

async function AdvantagesSection() {
  const { title, advantages } = await fetchAdvantagesData();
  return (
    <SectionWrapper>
      <div className="grid grid-cols-2">
        <AnimatedWrapper>
          <Title size="section" as="h2" title={title} />
        </AnimatedWrapper>
        <LinkButton
          className="col-start-1 self-end"
          title="Оставить заявку"
          link="#"
        />
        <AnimatedWrapper className="col-start-2 row-start-1 row-end-3">
          <AdvantagesList advantages={advantages} />
        </AnimatedWrapper>
      </div>
    </SectionWrapper>
  );
}

export default AdvantagesSection;
