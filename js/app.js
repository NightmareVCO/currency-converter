// Initialization of the variables and DOM.
const converterForm = document.getElementById("converterForm");
const amountInput = document.getElementById("amount");
const currencyInput = document.getElementById("currency");
const result = document.getElementById("result");
const error = document.getElementById("error");

// Data
const currencies = [
   {
      id: "1",
      name: "Dollar",
      rate: 56.84,
      symbol: "$"
   },
   {
      id: "2",
      name: "Euro",
      rate: 61.36,
      symbol: "€"
   },
   {
      id: "3",
      name: "Mexican Peso",
      rate: 3.39,
      symbol: "MXN$"

   }
];

// Functions
function convertCurrency(amount, currencyID) {
   const currency = currencies.find(currency => currency.id === currencyID);

   if (currency)
      return (amount / currency.rate).toFixed(2);

   return null;
}

/**
 * Retrieves the symbol of a currency based on its ID.
 *
 * @param {string} currencyID - The ID of the currency to retrieve the symbol for.
 * @return {string|null} The symbol of the currency, or null if the currency was not found.
 */
function getSymbol(currencyID) {
   const currency = currencies.find(currency => currency.id === currencyID);

   if (currency)
      return currency.symbol;

   return null;
}


// Event Listeners functions
function checkForm(event) {

   if (currencyInput.value == "") {
      currencyInput.focus();
      event.preventDefault();
      error.innerText = "Please select the currency";
      return false;
   }

   if (error.innerText.length > 0)
      error.innerText = "";

   event.preventDefault();
   return true;
}

/**
 * Converts the input currency amount to the desired currency and updates the result value.
 *
 * @param {Event} event - The event object.
 * @return {boolean} Returns true if the conversion is successful.
 */
function convert(event) {
   event.preventDefault();
   result.value = convertCurrency(amountInput.value, currencyInput.value) + getSymbol(currencyInput.value);
   return true;
}

//Event Initialization
converterForm.addEventListener("submit", function (event) {
   if (checkForm(event))
      convert(event);
});

converterForm.addEventListener("submit", (event) => {
   if (checkForm(event))
      convert(event);
});
