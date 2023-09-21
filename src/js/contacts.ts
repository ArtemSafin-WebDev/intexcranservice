import Swiper from "swiper";
import { SwiperOptions } from "swiper/types";

import "swiper/css";

export default function contacts() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".contacts")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    const options: SwiperOptions = {
      slidesPerView: "auto",
      speed: 200,
      slideToClickedSlide: true,
    };

    new Swiper(container, options);
  });
}
