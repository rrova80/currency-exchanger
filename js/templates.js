import state from "./state.js";
import { convertDateFormat, getCurrencyName } from "./utils.js";

function createCurrenciesTemplate(codes = []) {
  return codes.length
    ? codes.reduce(
        (acc, [code, name]) =>
          acc + `<li title="${name}">${code} | ${name}</li>`,
        ""
      )
    : "<li class=disabled>Currency not found</li>";
}

function createResultTemplate() {
  const {
    convertData: { amount },
    convertResult: {
      baseCode,
      targetCode,
      conversionRate,
      conversionResult,
      lastUpdate,
    },
  } = state;
  return `
    <p class="exchanger__result-info">
     ${amount} ${baseCode} 
      <span>${getCurrencyName(baseCode)}</span> 
  =
   ${conversionResult.toFixed(2)} ${targetCode} 
   <span>${getCurrencyName(targetCode)}</span>
    </p>
    <div class="exchanger__result-inner">
      <p class="exchanger__result-rate">
        1.00 ${baseCode} = ${conversionRate.toFixed(2)} ${targetCode}
      </p>
      <p class="exchanger__result-date">
        Last updated: ${convertDateFormat(lastUpdate)}
      </p>
    </div>
  `;
}

export { createCurrenciesTemplate, createResultTemplate };
