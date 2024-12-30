import { getElement, getElements } from "./utils.js";

export default {
  wrapper: getElement(".exchanger__wrapper"),
  form: getElement(".exchanger__form"),
  allInputs: getElements(".exchanger__form-input"),
  currencyInputs: getElements(".exchanger__form-input--currency"),
  currencyLists: getElements(".exchanger__form-currencies"),
  btnReverse: getElement(".exchanger__form-reverse"),
  resultWrapper: getElement(".exchanger__result"),
};
