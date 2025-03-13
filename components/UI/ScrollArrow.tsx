"use client";
import Image from "next/image";

function ScrollArrow({ targetId }: { targetId: string }) {
  const handleScroll = () => {
    const section = document.getElementById(targetId);
    if (!section) return;
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <button
      onClick={handleScroll}
      className="flex animate-bounce items-center justify-center rounded-full"
    >
      <Image
        src="/icons/main-block__arrow.svg"
        width={60}
        height={60}
        alt="Стрелка для навигации"
      />
    </button>
  );
}

export default ScrollArrow;
