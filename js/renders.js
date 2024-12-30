import state from "./state.js";
import vars from "./vars.js";
import { createCurrenciesTemplate, createResultTemplate } from "./templates.js";

function renderCurrencies() {
  vars.currencyLists.forEach((list) => {
    list.innerHTML = createCurrenciesTemplate(state.codes);
  });
}

function renderFilteredCurrencies(input, currencies) {
  input.closest(".exchanger__form-group").querySelector("ul").innerHTML =
    createCurrenciesTemplate(currencies);
}

function renderPreloader() {
  vars.resultWrapper.innerHTML = "<div class='preloader'></div>";
}

function renderConvertResult() {
  vars.resultWrapper.innerHTML = createResultTemplate();
}

function renderError(element) {
  element.innerHTML = `<p class='exchanger__error-message'>
      Convert operations are not aviable at this moment. Please, try later.
    </p>`;
}

export {
  renderCurrencies,
  renderFilteredCurrencies,
  renderConvertResult,
  renderError,
  renderPreloader,
};
