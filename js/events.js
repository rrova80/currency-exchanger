import vars from "./vars.js";
import {
  onSubmitForm,
  onOpenList,
  onSelectCurrency,
  onCloseList,
  onReverseCurrencies,
} from "./handlers.js";
import { filterCurrencies } from "./utils.js";
import { renderFilteredCurrencies } from "./renders.js";

vars.form.addEventListener("submit", onSubmitForm);

vars.currencyInputs.forEach((input, i) => {
  input.addEventListener("input", () => {
    input.value = input.value.toUpperCase();
    const filteredCurrencies = filterCurrencies(input.value);
    renderFilteredCurrencies(input, filteredCurrencies);
  });

  input.addEventListener("click", () => onOpenList(i));
});

vars.currencyLists.forEach((list, i) => {
  list.addEventListener("click", (e) => onSelectCurrency(e, i));
});

vars.btnReverse.addEventListener("click", onReverseCurrencies);

window.addEventListener("click", onCloseList);
