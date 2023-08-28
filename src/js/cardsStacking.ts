import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function cardsStacking() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-cards-stacking")
  );

  elements.forEach((element) => {
    const cards = Array.from(element.querySelectorAll<HTMLElement>(".js-card"));
    const list = element.querySelector<HTMLElement>(".js-stacking-list");
    if (!list) return;

    gsap.set(element, {
      overflow: "hidden",
      maxHeight: "100vh",
    });
    ScrollTrigger.refresh();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top top",
        pin: element,
        pinSpacing: true,
        scrub: true,
        end: () => `top+=${element.offsetHeight} top`,
      },
    });

    cards.forEach((card, cardIndex) => {
      if (cardIndex === 0) return;
      tl.to(
        card,
        {
          y: () => {
            const gap = parseFloat(
              window.getComputedStyle(list).getPropertyValue("gap")
            );
            console.log("Gap", gap);
            const cardHeight = cards[0].offsetHeight;
            const offset = (cardHeight - gap / 2) * -1 * cardIndex;

            console.log(`Card ${cardIndex + 1} values:`, {
              height: (cardHeight - gap * 2) * cardIndex * -1,
            });
            return offset;
          },
          duration: () => cardIndex * 0.5,
          ease: "none",
        },
        0
      );
    });
  });
}
