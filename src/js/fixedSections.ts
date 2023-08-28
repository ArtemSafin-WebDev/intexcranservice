import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function fixedSections() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-fixed-section")
  );

  elements.forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      pin: element,
      pinSpacing: false,
      end: () => `top+=${element.offsetHeight} top`,
      onLeave: () => {
        gsap.set(element, {
          autoAlpha: 0,
        });
      },
      onEnterBack: () => {
        gsap.set(element, {
          autoAlpha: 1,
        });
      },
    });
  });
}
