import { useToggleMenu } from "@/app/context/MenuContext";
import MenuBody from "./MenuBody";
import MenuIcon from "./MenuIcon";
import cn from "classnames";

const navItemsLeft: string[] = ["Галерея", "Дизайнерам"];
const navItemsRight: string[] = ["Контакты", "Заказать"];
function Menu() {
  const { isOpen } = useToggleMenu();
  return (
    <>
      <div className="flex items-center gap-4">
        <MenuIcon />
        <div className="font-bolduppercase md: mr-10 hidden px-4 py-2 text-xs font-bold uppercase">
          Меню
        </div>
      </div>
      <nav
        className={cn(
          "z- fixed top-0 flex h-screen w-full justify-start bg-black px-4 pt-28 transition-all duration-300 before:left-0 md:hidden before:transition-all before:duration-300",
          {
            "top-0 left-0 overflow-auto before:fixed before:top-0 before:left-0 before:block before:h-20 before:w-full before:bg-black after:absolute after:top-20 after:right-4 after:left-4 after:z-10 after:block after:h-[1px] after:bg-white/12 md:after:hidden":
              isOpen,
            "left-[-100%] before:left-[-100%]": !isOpen,
          },
        )}
      >
        <MenuBody items={[...navItemsLeft, ...navItemsRight]} />
      </nav>
      <nav className="hidden w-full justify-between gap-18 md:flex">
        <MenuBody items={navItemsLeft} />
        <MenuBody items={navItemsRight} />
      </nav>
      {/* {isOpen && <Drawer />} */}
    </>
  );
}

// function Drawer() {
//   return (
//     <nav className="fixed top-0 left-0 z-50 hidden h-screen w-64 flex-col bg-green-500 md:flex">
//       <MenuBody isDrawer={true} items={["1", "2", "3", "4"]} />
//     </nav>
//   );
// }

export default Menu;
