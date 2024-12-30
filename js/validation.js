import state from "./state.js";

function validateInput(input) {
  let isValid = false;
  const spanError = input
    .closest(".exchanger__form-group")
    .querySelector("span");
  const errorMessage = input.getAttribute("data-error-message");
  if (input.name === "amount") {
    isValid = !(input.value <= 0);
    spanError.innerText = !isValid ? errorMessage : "";
  } else {
    isValid = state.codes.some(([code]) => code === input.value);
    spanError.innerText = !isValid ? errorMessage : "";
  }
  return isValid;
}

export default validateInput;
