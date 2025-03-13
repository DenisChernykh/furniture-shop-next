import SectionWrapper from "@/components/UI/SectionWrapper";
import { Skeleton } from "@/components/UI/skeleton";

function StatsSectionSkeleton() {
  return (
    <SectionWrapper>
      <div className="flex flex-wrap justify-between gap-5">
        <div className="h-[110px]">
          <Skeleton className="bg-muted-foreground h-full w-[250px]"></Skeleton>
        </div>
        <div className="h-[110px]">
          <Skeleton className="bg-muted-foreground h-full w-[250px]"></Skeleton>
        </div>
        <div className="h-[110px]">
          <Skeleton className="bg-muted-foreground h-full w-[250px]"></Skeleton>
        </div>
        <div className="h-[110px]">
          <Skeleton className="bg-muted-foreground h-full w-[250px]"></Skeleton>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default StatsSectionSkeleton;
