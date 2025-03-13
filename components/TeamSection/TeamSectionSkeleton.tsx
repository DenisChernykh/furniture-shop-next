import SectionWrapper from "../UI/SectionWrapper";
import { Skeleton } from "../UI/skeleton";

function TeamSectionSkeleton() {
  return (
    <SectionWrapper>
      <div className="flex justify-between gap-5">
        <Skeleton className="bg-muted-foreground h-36 w-36 rounded-full md:h-72 md:w-72" />
        <Skeleton className="bg-muted-foreground h-36 w-36 rounded-full md:h-72 md:w-72" />
        <Skeleton className="bg-muted-foreground hidden h-72 w-72 rounded-full md:block" />
        <Skeleton className="bg-muted-foreground hidden h-72 w-72 rounded-full lg:block" />
        <Skeleton className="bg-muted-foreground hidden h-72 w-72 rounded-full xl:block" />
        <Skeleton className="bg-muted-foreground hidden h-72 w-72 rounded-full 2xl:block" />
      </div>
    </SectionWrapper>
  );
}

export default TeamSectionSkeleton;
