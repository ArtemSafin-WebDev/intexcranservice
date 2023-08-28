import Swiper from "swiper";
import { SwiperOptions } from "swiper/types";
import { Navigation } from "swiper/modules";

import "swiper/css";

export default function pressCenter() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".press-center")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    const options: SwiperOptions = {
      modules: [Navigation],
      slidesPerView: "auto",
      speed: 600,
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".press-center__arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".press-center__arrow--next"
        ),
      },
    };

    new Swiper(container, options);
  });
}
