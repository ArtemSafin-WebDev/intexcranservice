import Swiper from "swiper";
import { SwiperOptions } from "swiper/types";
import { Navigation, EffectFade } from "swiper/modules";

import "swiper/css";

export default function introSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".intro-slider")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    const options: SwiperOptions = {
      modules: [Navigation, EffectFade],
      slidesPerView: 1,
      effect: "fade",
      fadeEffect: {
        crossFade: false,
      },
      speed: 800,
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".intro-slider__arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".intro-slider__arrow--next"
        ),
      },
    };

    new Swiper(container, options);
  });
}
