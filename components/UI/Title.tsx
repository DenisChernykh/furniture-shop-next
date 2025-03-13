import classNames from "classnames";

type TitleProps = {
  title: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  size?: "section" | "hero";
};
function Title({ title, as: Tag = "h1", className, size }: TitleProps) {
  return (
    <Tag
      className={classNames(
        "font-brewery",
        {
          "text-hero md:text-hero-md sm:text-hero-sm lg:text-hero-lg xl:text-hero-xl 2xl:text-hero-2xl text-center":
            size === "hero",
          "text-section-title md:text-section-title-md sm:text-section-title-sm lg:text-section-title-lg xl:text-section-title-xl 2xl:text-section-title-2xl text-balance":
            size === "section",
        },
        className,
      )}
    >
      {title}
    </Tag>
  );
}

export default Title;
