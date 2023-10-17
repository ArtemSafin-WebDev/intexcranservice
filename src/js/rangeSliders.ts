import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

export default function rangeSliders() {
  const elements = Array.from(
    document.querySelectorAll(".js-range-slider-double")
  );

  elements.forEach((element) => {
    const inputs = Array.from(
      element.querySelectorAll<HTMLInputElement>("input")
    );
    const rangeSliderElement = element.querySelector<HTMLElement>(
      ".js-range-slider-element"
    );
    if (!rangeSliderElement) return;
    const minValue = element.hasAttribute("data-min")
      ? Number(element.getAttribute("data-min"))
      : 10;
    const maxValue = element.hasAttribute("data-max")
      ? Number(element.getAttribute("data-max"))
      : 15;
    const stepValue = element.hasAttribute("data-step")
      ? Number(element.getAttribute("data-step"))
      : 1;
    const form = element.closest("form");

    const startValue = inputs[0].value.replace(/\s/g, "").trim()
      ? parseFloat(inputs[0].value.replace(/\s/g, "").trim())
      : "";
    const endValue = inputs[1].value.replace(/\s/g, "").trim()
      ? parseFloat(inputs[1].value.replace(/\s/g, "").trim())
      : "";

    console.log("Range slider created");

    noUiSlider.create(rangeSliderElement, {
      start: [
        startValue ? startValue : minValue,
        endValue ? endValue : maxValue,
      ],
      connect: true,
      orientation: "horizontal",
      step: stepValue,
      range: {
        min: minValue,
        max: maxValue,
      },
      format: {
        to: (v) =>
          Number(parseFloat(v.toString()).toFixed(0)).toLocaleString("ru-RU", {
            useGrouping: true,
          }),
        from: (v) => Number(parseFloat(v).toFixed(0)),
      },
    });

    // rangeSliderElement.noUiSlider.on('update', () => {
    //     input.value = rangeSliderElement.noUiSlider.get();
    // });

    //@ts-ignore
    rangeSliderElement.noUiSlider.on("update", () => {
      //@ts-ignore
      const newValue = rangeSliderElement.noUiSlider.get();
      inputs[0].value = newValue[0];
      inputs[1].value = newValue[1];
    });

    inputs[0].addEventListener("change", (event) => {
      //@ts-ignore
      rangeSliderElement.noUiSlider.set(
        //@ts-ignore
        event.target.value.replace(/[^\d]+/g, "")
      );
    });
    inputs[1].addEventListener("change", (event) => {
      //@ts-ignore
      rangeSliderElement.noUiSlider.set([
        null,
        //@ts-ignore
        event.target.value.replace(/[^\d]+/g, ""),
      ]);
    });

    if (form) {
      form.addEventListener("reset", () => {
        console.log("Parent form has been reset");
        //@ts-ignore
        rangeSliderElement.noUiSlider.reset();
        setTimeout(() => {
          //@ts-ignore
          const newValue = rangeSliderElement.noUiSlider.get();
          inputs[0].value = newValue[0];
          inputs[1].value = newValue[1];
        }, 10);

        // rangeSliderElement.noUiSlider.set([minValue, maxValue]);
      });
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    if (
      target.matches(".catalog-header__filters-range-btn") ||
      target.closest(".catalog-header__filters-range-btn")
    ) {
      event.preventDefault();
      const sliders = Array.from(
        document.querySelectorAll<HTMLElement>(".catalog-header__filters-range")
      );

      const slider = target.closest<HTMLElement>(
        ".catalog-header__filters-range"
      );
      sliders.forEach((otherSlider) => {
        if (otherSlider !== slider) {
          otherSlider.classList.remove("active");
        }
      });

      slider?.classList.toggle("active");
    }

    if (
      !(
        target.matches(".catalog-header__filters-range") ||
        target.closest(".catalog-header__filters-range")
      )
    ) {
      const sliders = Array.from(
        document.querySelectorAll<HTMLElement>(".catalog-header__filters-range")
      );

      sliders.forEach((slider) => slider.classList.remove("active"));
    }
  });
}
