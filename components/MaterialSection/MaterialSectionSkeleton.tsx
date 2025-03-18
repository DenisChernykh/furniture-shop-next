import SectionWrapper from "../UI/SectionWrapper";
import { Skeleton } from "../UI/skeleton";

function MaterialSectionSkeleton() {
  
  return (
    <SectionWrapper>
      <div className="block justify-between gap-10 space-y-10 md:flex">
        <div className="flex flex-1 flex-col items-center gap-5">
          <div>
            <Skeleton className="bg-muted-foreground h-[100px] w-[100px] rounded-full" />
          </div>
          <div className="w-full">
            <Skeleton className="bg-muted-foreground h-[20px]" />
          </div>
          <div className="w-full">
            <Skeleton className="bg-muted-foreground h-[40px]" />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center gap-5">
          <div>
            <Skeleton className="bg-muted-foreground h-[100px] w-[100px] rounded-full" />
          </div>
          <div className="w-full">
            <Skeleton className="bg-muted-foreground h-[20px]" />
          </div>
          <div className="w-full">
            <Skeleton className="bg-muted-foreground h-[40px]" />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center gap-5">
          <div>
            <Skeleton className="bg-muted-foreground h-[100px] w-[100px] rounded-full" />
          </div>
          <div className="w-full">
            <Skeleton className="bg-muted-foreground h-[20px]" />
          </div>
          <div className="w-full">
            <Skeleton className="bg-muted-foreground h-[40px]" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default MaterialSectionSkeleton;
