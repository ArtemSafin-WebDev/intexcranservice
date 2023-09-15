import Swiper from "swiper";
import { SwiperOptions } from "swiper/types";
import { Navigation, EffectCreative } from "swiper/modules";

import "swiper/css";

export default function craneSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".crane-slider")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    const slides = Array.from(
      element.querySelectorAll<HTMLElement>(".swiper-slide")
    );
    const wrapper = element.querySelector<HTMLElement>(".swiper-wrapper");

    wrapper?.append(...slides.map((slide) => slide.cloneNode(true)));
    wrapper?.append(...slides.map((slide) => slide.cloneNode(true)));

    const options: SwiperOptions = {
      modules: [EffectCreative, Navigation],
      speed: 700,
      loop: true,
      slidesPerView: "auto",
      effect: "creative",
      longSwipesRatio: 0.2,
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".crane-slider__arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".crane-slider__arrow--next"
        ),
      },
      creativeEffect: {
        limitProgress: 100,
        progressMultiplier: 1,
        prev: {
          translate: [0, 0, -600],
          scale: 1,
          opacity: 1,
          origin: "left top",
        },
        next: {
          translate: ["103%", 0, 0],
          scale: 0.8,
          opacity: 1,
          origin: "left top",
        },
      },
    };

    new Swiper(container, options);
  });
}
