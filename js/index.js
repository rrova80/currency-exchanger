"use strict";
import vars from "./vars.js";
import state from "./state.js";
import { fetchData } from "./requests.js";
import { renderCurrencies } from "./renders.js";
import { renderError } from "./renders.js";

fetchData("codes")
  .then((data) => {
    state.codes = data.supported_codes;
    renderCurrencies();
  })
  .catch((error) => {
    renderError(vars.form);
    vars.form.classList.remove("exchanger__form");
  });
