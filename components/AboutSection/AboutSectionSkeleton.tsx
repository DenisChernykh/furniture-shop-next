import SectionWrapper from "@/components/UI/SectionWrapper";
import { Skeleton } from "@/components/UI/skeleton";

function AboutSectionSkeleton() {
  return (
    <SectionWrapper>
      <div className="block space-y-4 overflow-hidden md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
        <Skeleton className="bg-muted-foreground h-[280px] w-full" />

        <div className="grid grid-cols-2 gap-4">
          <div className="lg:row-span-2 lg:text-[150px]">
            <Skeleton className="bg-muted-foreground h-full w-full" />
          </div>

          <div className="mb-8">
            <Skeleton className="bg-muted-foreground h-[70px] w-full" />
          </div>
          <div className="col-span-2 leading-7 text-white/50 uppercase lg:col-auto">
            <Skeleton className="bg-muted-foreground h-[162px] w-full" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

{
  /* <div className="grid grid-cols-2">
  <div className="font-brewery text-[280px] leading-none">20</div>
  <div>
    <div className="mb-8">
      <Title title="Лет опыта" size="section" />
    </div>
    <div className="leading-7 text-white/50 uppercase">{description}</div>
  </div>
</div>; */
}

export default AboutSectionSkeleton;
// {
//    <div className="flex flex-col space-y-3">
//       <Skeleton className="bg-muted h-[125px] w-[250px] rounded-xl" />
//       <div className="space-y-2">
//         <Skeleton className="h-4 w-[250px]" />
//         <Skeleton className="h-4 w-[200px]" />
//       </div>
//     </div>
// }

<div className="grid grid-cols-2 gap-5">
  <div>
    <Skeleton className="bg-muted-foreground h-[280px] w-2/3" />
  </div>
  <div className="grid grid-cols-2 gap-5">
    <div>
      <Skeleton className="bg-muted-foreground h-full w-[280px]" />
    </div>
    <div className="flex flex-col gap-5">
      <Skeleton className="bg-muted-foreground h-[70px] w-full" />
      <Skeleton className="bg-muted-foreground h-full w-full" />
    </div>
  </div>
</div>;
