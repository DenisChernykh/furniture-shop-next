"use client";
import { motion } from "motion/react";
type SectionTitleProps = {
  title: string;
};
function SectionTitle({ title }: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileInView={{ x: 0, opacity: 1 }}
      className="font-brewery text-section-title md:text-section-md sm:text-section-sm lg:text-section-lg xl:text-section-xl 2xl:text-section-2xl text-balance"
    >
      {title}
    </motion.h2>
  );
}

export default SectionTitle;
