import state from "./state.js";

function getElement(selector) {
  return document.querySelector(selector);
}

function getElements(selector) {
  return document.querySelectorAll(selector);
}

function filterCurrencies(value) {
  return state.codes.filter(
    ([code, name]) => code.includes(value) || name.toUpperCase().includes(value)
  );
}

function getCurrencyName(searchCode) {
  const [, name] = state.codes.find(([code]) => searchCode === code);
  return name;
}

function convertDateFormat(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-UK", options).format(new Date(date));
}

export {
  getElement,
  getElements,
  filterCurrencies,
  convertDateFormat,
  getCurrencyName,
};
