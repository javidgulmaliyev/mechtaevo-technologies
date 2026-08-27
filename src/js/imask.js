import imask from "imask";

/** @type {HTMLInputElement} */
const technologyFeedbackTelInput = document.getElementById("technology-feedback-form-tel");

if (technologyFeedbackTelInput) {
  const telMask = imask(technologyFeedbackTelInput, {
    mask: "+{7}(000)000-00-00",
  });
}
