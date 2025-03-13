import Link from "next/link";
import cn from "classnames";
type LinkButtonProps = {
  title: string;
  link: string;
  className?: string;
};
function LinkButton({ title, className, link }: LinkButtonProps) {
  return (
    <Link
      href={link}
      className={cn(
        "inline-flex cursor-pointer items-center gap-5 font-semibold uppercase",
        className,
      )}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full border-1 border-white/30 text-2xl">
        +
      </span>
      <span>{title}</span>
    </Link>
  );
}

export default LinkButton;
