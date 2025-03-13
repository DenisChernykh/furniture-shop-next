"use client";
import { motion, MotionProps } from "framer-motion";

type AnimatedTitleProps = {
  children: React.ReactNode;
  className?: string;
  triggerScroll?: boolean;
} & MotionProps;

function AnimatedWrapper({
  children,
  className,
  triggerScroll = true,
  initial = { x: "-100%", opacity: 0 }, // Дефолтное значение
  transition = { duration: 0.6 }, // Дефолтное значение
  animate = { x: 0, opacity: 1 },
  whileInView = { x: 0, opacity: 1 },
  viewport = { once: true },
  ...rest
}: AnimatedTitleProps) {
  return (
    <motion.div
      initial={initial}
      transition={transition}
      className={className}
      animate={triggerScroll ? undefined : animate}
      whileInView={triggerScroll ? whileInView : undefined}
      viewport={triggerScroll ? viewport : undefined}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedWrapper;
