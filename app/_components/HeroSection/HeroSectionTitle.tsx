import cn from "classnames";
import * as motion from "motion/react-client";

type HeroSectionTitleProps = {
  children: React.ReactNode;
  classNames?: string;
};
function HeroSectionTitle({ children, classNames }: HeroSectionTitleProps) {
  return (
    <motion.h1
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn(
        "text-hero md:text-hero-md sm:text-hero-sm lg:text-hero-lg xl:text-hero-xl 2xl:text-hero-2xl font-brewery text-center",
        classNames,
      )}
    >
      {children}
    </motion.h1>
  );
}

export default HeroSectionTitle;
