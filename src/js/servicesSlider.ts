import Swiper from "swiper";
import "swiper/css";
import { SwiperOptions } from "swiper/types";

export default function servicesSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".services, .other-services")
  );

  const mql = window.matchMedia("(max-width: 640px)");

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    const options: SwiperOptions = {
      slidesPerView: "auto",
      speed: 600,
    };
    let instance: Swiper | null = null;

    const handleWidthChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        instance = new Swiper(container, options);
      } else {
        if (instance) {
          instance.destroy();
          instance = null;
        }
      }
    };

    mql.addEventListener("change", handleWidthChange);

    handleWidthChange(mql);
  });
}
