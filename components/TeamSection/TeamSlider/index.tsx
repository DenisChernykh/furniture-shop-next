"use client";

import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import styles from "./TeamSlider.module.css";

type TeamData = {
  id: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
};
type TeamSliderProps = {
  className?: string;
  teamData: TeamData[];
};
function TeamSlider({ teamData }: TeamSliderProps) {
  return (
    <Swiper
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      slidesPerView="auto"
      spaceBetween={20}
      loop={true}
    >
      {teamData.map((member) => (
        <SwiperSlide key={member.id} className={styles.slide}>
          <Image
            src={member.imageUrl}
            alt={`${member.firstName} ${member.lastName}`}
            width={290}
            height={290}
            className="rounded-full"
          />
          <div
            style={{
              background: `
						linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)
						`,
            }}
            className="absolute inset-0"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TeamSlider;
