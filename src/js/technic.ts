import Swiper from "swiper";
import { SwiperOptions } from "swiper/types";
import { Navigation } from "swiper/modules";

import "swiper/css";

export default function technic() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".technic")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    const options: SwiperOptions = {
      modules: [Navigation],
      slidesPerView: "auto",
      speed: 800,
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".technic__arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".technic__arrow--next"
        ),
      },
    };

    new Swiper(container, options);
  });
}
