import { fetchMaterialsData } from "@/utils/actions";
import SectionWrapper from "../UI/SectionWrapper";
import Image from "next/image";

async function MaterialSection() {
  const materials = await fetchMaterialsData();
  console.log(materials);
  return (
    <SectionWrapper>
      <div className="block gap-10 space-y-5 md:flex">
        {materials.map((material) => {
          return (
            <article
              className="materials-border flex flex-1 flex-col items-center gap-10 p-10"
              key={material.id}
            >
              <Image
                className="rounded-full"
                src={material.imageUrl}
                width={100}
                height={100}
                alt={material.title}
              />
              <h4 className="font-brewery text-3xl xl:text-4xl 2xl:text-5xl">
                {material.title}
              </h4>
              <p className="text-center text-white/80 uppercase">
                {material.description} {material.features.join(", ")}
              </p>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

export default MaterialSection;
