import Swiper from "swiper";
import { EffectFade } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/effect-fade";

export default function directions() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".directions")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    const links = Array.from(
      element.querySelectorAll<HTMLLinkElement>(".directions__link")
    );

    const setActiveLink = (index: number): void => {
      links.forEach((link) => link.classList.remove("active"));
      links[index]?.classList.add("active");
    };
    const options: SwiperOptions = {
      modules: [EffectFade],
      speed: 600,
      effect: "fade",
      fadeEffect: {
        crossFade: false,
      },
      init: false,
      on: {
        init: (swiper) => {
          setActiveLink(swiper.activeIndex);
        },
        slideChange: (swiper) => {
          setActiveLink(swiper.activeIndex);
        },
      },
    };
    const instance = new Swiper(container, options);
    instance.init();

    links.forEach((link, linkIndex) => {
      link.addEventListener("click", (event: MouseEvent) => {
        event.preventDefault();
        instance.slideTo(linkIndex);
      });

      link.addEventListener("mouseenter", () => {
        instance.slideTo(linkIndex);
      });
    });
  });
}
