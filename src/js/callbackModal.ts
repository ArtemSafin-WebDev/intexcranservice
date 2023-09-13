import Validator from "./classes/Validator";
import axios from "axios";

export default function callbackModal() {
  const modal = document.querySelector<HTMLDialogElement>(".callback-modal");
  if (!modal) return;

  const openModal = (event: MouseEvent) => {
    event.preventDefault();
    modal.classList.add("active");
    document.body.classList.add("modal-open");
  };

  const closeModal = (event: MouseEvent) => {
    event.preventDefault();
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
  };

  const openBtns = Array.from(
    document.querySelectorAll<HTMLButtonElement>(".js-open-callback-modal")
  );
  const closeBtns = Array.from(
    document.querySelectorAll<HTMLButtonElement>(".js-close-callback-modal")
  );

  openBtns.forEach((btn) => btn.addEventListener("click", openModal));
  closeBtns.forEach((btn) => btn.addEventListener("click", closeModal));

  const form = modal.querySelector<HTMLFormElement>("form");
  if (!form) return;

  const submitBtn = form.querySelector<HTMLButtonElement>(
    'button[type="submit"]'
  );
  const mainLayer = modal.querySelector<HTMLElement>(
    ".callback-modal__main-inner"
  );
  const successLayer = modal.querySelector<HTMLElement>(
    ".callback-modal__success-inner"
  );
  const errorLayer = modal.querySelector<HTMLElement>(
    ".callback-modal__error-inner"
  );

  const formValidator = new Validator(form);
  const controller = new AbortController();
  const resetBtn = modal.querySelector<HTMLButtonElement>(
    ".callback-modal__reset-btn"
  );

  const handleFormSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    if (!formValidator || !form) return;
    formValidator.validate();
    if (formValidator.valid) {
      const formData = new FormData(form);
      if (submitBtn) submitBtn.disabled = true;
      axios
        .post(form.action, formData, {
          signal: controller.signal,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          if (form) {
            form.reset();
          }
          mainLayer?.classList.remove("active");
          successLayer?.classList.add("active");
          errorLayer?.classList.remove("active");
        })
        .catch((err) => {
          mainLayer?.classList.remove("active");
          successLayer?.classList.remove("active");
          errorLayer?.classList.add("active");
          console.error(err);
        })
        .finally(() => {
          if (submitBtn) submitBtn.disabled = false;
        });
    }
  };
  form.addEventListener("submit", handleFormSubmit);

  if (resetBtn)
    resetBtn.addEventListener("click", (event: MouseEvent) => {
      event.preventDefault();
      mainLayer?.classList.add("active");
      successLayer?.classList.remove("active");
      errorLayer?.classList.remove("active");
    });
}
