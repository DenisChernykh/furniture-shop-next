import cn from "classnames";

function MenuBody({
  items,
  isDrawer,
}: {
  items: string[];
  isDrawer?: boolean;
}) {
  return (
    <ul
      className={cn("flex flex-col gap-10 text-2xl md:gap-18 md:text-xs", {
        "flex-col": isDrawer,
        "md:flex-row": !isDrawer,
      })}
    >
      {items.map((item) => (
        <li
          className={cn(
            "transtion-colors duration-300 hover:rounded-2xl hover:bg-white/20 md:px-4 md:py-2 md:font-bold md:uppercase",
          )}
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default MenuBody;
