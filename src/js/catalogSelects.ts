export default function catalogSelects() {
  const btnSelector = ".catalog-header__filters-select-btn";
  const mainSelector = ".catalog-header__filters-select";
  const choiceSelector = ".catalog-header__filters-select-choice";
  document.addEventListener("click", (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (target.matches(btnSelector) || target.closest(btnSelector)) {
      event.preventDefault();
      const select = target.closest(mainSelector);
      if (!select) return;

      const selects = Array.from(
        document.querySelectorAll<HTMLElement>(mainSelector)
      );

      selects.forEach((otherSelect) => {
        if (otherSelect !== select) {
          otherSelect.classList.remove("active");
        }
      });
      select.classList.toggle("active");
    }

    if (target.matches(choiceSelector) || target.closest(choiceSelector)) {
      //   event.preventDefault();
      const select = target.closest(mainSelector);
      if (!select) return;
      select.classList.remove("active");
    }

    if (!(target.matches(mainSelector) || target.closest(mainSelector))) {
      Array.from(document.querySelectorAll<HTMLElement>(mainSelector)).forEach(
        (select) => select.classList.remove("active")
      );
    }
  });
}
