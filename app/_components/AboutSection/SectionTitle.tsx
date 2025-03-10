type SectionTitleProps = {
  children: React.ReactNode;
};
function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="font-brewery text-section-title md:text-section-md sm:text-section-sm lg:text-section-lg xl:text-section-xl 2xl:text-section-2xl text-balance">
      {children}
    </h2>
  );
}

export default SectionTitle;
