import AnimatedWrapper from "@/components/UI/AnimatedWrapper";
import SectionWrapper from "@/components/UI/SectionWrapper";
import Title from "@/components/UI/Title";
import { fetchStatisticsData } from "@/utils/actions";

async function StatsSection() {
  const data = await fetchStatisticsData();

  return (
    <SectionWrapper>
      <div className="flex flex-wrap justify-between gap-5 overflow-hidden">
        {data.map((item) => (
          <AnimatedWrapper initial={{ x: "100%", opacity: 0 }} key={item.id}>
            <div className="space-y-4">
              <Title title={item.title} as="h5" size="section" />
              <div className="text-white/50 uppercase">{item.indicator}</div>
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default StatsSection;
