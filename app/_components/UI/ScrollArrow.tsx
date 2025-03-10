import Image from "next/image";

function ScrollArrow() {
  return (
    <a className="flex animate-bounce items-center justify-center rounded-full">
      <Image
        src="/icons/main-block__arrow.svg"
        width={60}
        height={60}
        alt="Стрелка для навигации"
      />
    </a>
  );
}

export default ScrollArrow;
