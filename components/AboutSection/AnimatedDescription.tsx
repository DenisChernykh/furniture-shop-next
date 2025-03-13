import Title from "@/components/UI/Title";

type DescriptionProps = {
  description: string;
};
function Description({ description }: DescriptionProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="font-brewery text-[112px] leading-none lg:row-span-2 lg:text-[150px] xl:text-[200px] 2xl:text-[280px]">
        20
      </div>

      <div className="mb-8">
        <Title title="Лет опыта" size="section" />
      </div>
      <div className="col-span-2 leading-7 text-white/50 uppercase lg:col-auto">
        {description}
      </div>
    </div>
  );
}

export default Description;
