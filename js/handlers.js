import vars from "./vars.js";
import state from "./state.js";
import validateInput from "./validation.js";
import { fetchData } from "./requests.js";
import {
  renderConvertResult,
  renderError,
  renderPreloader,
} from "./renders.js";

function onSubmitForm(e) {
  e.preventDefault();
  const validationArray = [];

  vars.allInputs.forEach((input) => {
    state.convertData[input.name] = input.value;
    validationArray.push(validateInput(input));
  });

  const isInputsValid = validationArray.every((isValid) => isValid);

  if (!isInputsValid) {
    return;
  }

  renderPreloader();

  const { amount, from, to } = state.convertData;

  fetchData(`pair/${from}/${to}/${amount}`)
    .then((data) => {
      state.convertResult = {
        baseCode: data.base_code,
        targetCode: data.target_code,
        conversionRate: data.conversion_rate,
        conversionResult: data.conversion_result,
        lastUpdate: data.time_last_update_utc,
      };
      renderConvertResult();
    })
    .catch((error) => {
      renderError(vars.resultWrapper);
    });
}

function onOpenList(i) {
  vars.currencyLists[i].classList.add("active");
}

function onCloseList(e) {
  if (!e.target.classList.contains("exchanger__form-input--currency")) {
    vars.currencyLists.forEach((list) => {
      list.classList.remove("active");
    });
  }
}

function onSelectCurrency({ target }, i) {
  if (target.tagName === "LI") {
    vars.currencyInputs[i].value = target.innerText.slice(0, 3);
  }
}

function onReverseCurrencies() {
  const [inputFrom, inputTo] = vars.currencyInputs;
  const from = inputFrom.value;
  const to = inputTo.value;

  state.convertData = {
    from: to,
    to: from,
  };

  inputFrom.value = to;
  inputTo.value = from;
}

export {
  onSubmitForm,
  onOpenList,
  onSelectCurrency,
  onCloseList,
  onReverseCurrencies,
};
