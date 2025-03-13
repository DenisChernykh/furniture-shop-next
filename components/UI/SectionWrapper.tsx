import Container from "./Container";

type SectionWrapperProps = {
  id?: string;
  children: React.ReactNode;
};
function SectionWrapper({ children, id }: SectionWrapperProps) {
  return (
    <section id={id} className="mb-5 pt-10 md:mb-16 md:pt-28">
      <Container>{children}</Container>
    </section>
  );
}

export default SectionWrapper;
