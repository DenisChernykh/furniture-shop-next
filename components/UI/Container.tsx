import cn from "classnames";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("relative mx-auto max-w-[117.5rem] px-4 md:px-5", className)}
    >
      {children}
    </div>
  );
}

export default Container;
