import Swiper from "swiper";
import { SwiperOptions } from "swiper/types";
import { Navigation } from "swiper/modules";

import "swiper/css";

export default function history() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".history")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    const options: SwiperOptions = {
      modules: [Navigation],
      slidesPerView: "auto",
      speed: 800,
      longSwipesRatio: 0.2,
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".history__arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".history__arrow--next"
        ),
      },
    };

    new Swiper(container, options);
  });
}
