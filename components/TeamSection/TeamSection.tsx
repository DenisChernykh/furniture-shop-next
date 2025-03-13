import { fetchTeamData } from "@/utils/actions";
import SectionWrapper from "../UI/SectionWrapper";
import LinkButton from "../UI/LinkButton";
import TeamSlider from "./TeamSlider";

async function TeamSection() {
  const data = await fetchTeamData();

  return (
    <SectionWrapper>
      <div className="mb-5 md:mb-16">
        <TeamSlider teamData={data} />
      </div>
			<LinkButton title="О компании" link="about" />

    </SectionWrapper>
  );
}

export default TeamSection;
