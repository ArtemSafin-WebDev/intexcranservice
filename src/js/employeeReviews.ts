import Swiper from "swiper";
import { SwiperOptions } from "swiper/types";
import { Navigation } from "swiper/modules";

import "swiper/css";

export default function employeeReviews() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".employees-reviews")
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
      modules: [Navigation],
      speed: 700,
      slidesPerView: "auto",
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".employees-reviews__arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".employees-reviews__arrow--next"
        ),
      },
    };

    new Swiper(container, options);
  });
}
