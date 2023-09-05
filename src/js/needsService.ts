import Validator from "./classes/Validator";
import axios from "axios";

export default function needsService() {
  const forms = Array.from<HTMLFormElement>(
    document.querySelectorAll(".js-needs-service-form")
  );

  forms.forEach((form) => {
    const formValidator = new Validator(form);
    const controller = new AbortController();
    const successLayer = form.nextElementSibling;
    const submitBtn = form.querySelector<HTMLButtonElement>(
      'button[type="submit"]'
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
            if (successLayer) {
              successLayer.classList.add("active");
              setTimeout(() => {
                successLayer.classList.remove("active");
              }, 2000);
            }
          })
          .catch((err) => {
            console.error(err);
          })
          .finally(() => {
            if (submitBtn) submitBtn.disabled = false;
          });
      }
    };
    form.addEventListener("submit", handleFormSubmit);
  });
}
