import Container from "@/components/UI/Container";
import Image from "next/image";

type HeroSectionProps = {
  imageUrl: string;
  children: React.ReactNode;
};
function HeroSection({ imageUrl, children }: HeroSectionProps) {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          className="object-cover"
          src={imageUrl}
          alt="Задний фон"
          fill={true}
        />
        <div
          style={{
            background: `
						linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 24.63%),
						linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgb(0, 0, 0) 100%)
						`,
          }}
          className="absolute inset-0"
        />
      </div>
      <Container className="flex h-screen flex-col justify-end pt-20 pb-11 md:pb-36">
        {children}
      </Container>
    </section>
  );
}

export default HeroSection;
