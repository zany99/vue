const FUNT_TO_USD = 1.26;
const FUNT_TO_EURO = 1.18;

function saveSelectValue(el) {
    localStorage.setItem(el.name, el.value);
}
function loadSelectValue(el) {
    return localStorage.getItem(el.name);
}

const start_currencies = [...document.querySelectorAll(".price__currency")];
const start_prices = [...document.querySelectorAll(".price__price")];

const funts = start_prices.map((start_price) => +start_price.innerHTML);
const dollars = funts.map((f) => (f * FUNT_TO_USD).toFixed(2));
const euros = funts.map((f) => (f * FUNT_TO_EURO).toFixed(2));

function _resetCurrency(selectCheck) {
    saveSelectValue(selectCheck);
    const curr = loadSelectValue(selectCheck) || "£";

    start_currencies.forEach((i) => (i.innerHTML = curr));

    start_prices.forEach((sp, ind) => {
        switch (curr) {
            case "$":
                sp.innerHTML = String(dollars[ind]);
                break;
            case "€":
                sp.innerHTML = String(euros[ind]);
                break;
            default:
                sp.innerHTML = String(funts[ind]);
        }
    });
}

(function loadInitial() {
    let selectCheck = document.querySelector("[name='currency_options']");
    selectCheck.value = loadSelectValue(selectCheck) || "£";
    selectCheck.addEventListener("change", () => _resetCurrency(selectCheck));

    _resetCurrency(selectCheck);
})();
