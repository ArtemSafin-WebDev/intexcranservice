export default function catalog() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".catalog-header__filters")
  );

  elements.forEach((element) => {
    const btn = element.querySelector<HTMLButtonElement>(
      ".catalog-header__filters-mobile-btn"
    );

    btn?.addEventListener("click", (event) => {
      event.preventDefault();
      element.classList.toggle("active");
    });
  });
}
