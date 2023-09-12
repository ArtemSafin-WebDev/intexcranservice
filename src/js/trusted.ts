import Swiper from "swiper";
import { SwiperOptions } from "swiper/types";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function trusted() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".trusted__slider")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    const wrapper = element.querySelector<HTMLElement>(".swiper-wrapper");
    const slides = Array.from(
      element.querySelectorAll<HTMLElement>(".swiper-slide")
    );

    wrapper?.append(...slides.map((slide) => slide.cloneNode(true)));
    wrapper?.append(...slides.map((slide) => slide.cloneNode(true)));

    const options: SwiperOptions = {
      modules: [Autoplay],
      slidesPerView: "auto",
      centeredSlides: true,
      loop: true,
      //   loopedSlides: 15,

      speed: 3500,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    };

    if (!container) return;

    new Swiper(container, options);
  });
}
