import cn from "classnames";
import * as motion from "motion/react-client";

type HeroSectionTitleProps = {
  title: string;
  classNames?: string;
};
function HeroSectionTitle({ title, classNames }: HeroSectionTitleProps) {
  return (
    <motion.h1
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "text-hero md:text-hero-md sm:text-hero-sm lg:text-hero-lg xl:text-hero-xl 2xl:text-hero-2xl font-brewery text-center",
        classNames,
      )}
    >
      {title}
    </motion.h1>
  );
}

export default HeroSectionTitle;
