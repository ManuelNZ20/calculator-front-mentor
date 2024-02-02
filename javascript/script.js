let result = document.getElementById("result");

let addCalculator = (number) => {
  if (result.value == 0) result.value = number;
  else result.value += number;
};

let addSymbol = (symbol) => {
  if (result.value !== "0.00") {
    result.value += symbol;
  }
};

const clearConsoleCalculator = () => {
  const string = result.value;
  result.value = string.substring(0, string.length - 1);
  if (string.length <= 0 || result.value == "") return (result.value = 0);
};

const calculatorSum = () => {
  result.value += "+";
};

const calculatorRest = () => {
  result.value += "-";
};

const calculatorMultiplication = () => {
  result.value += "*";
};
const calculatorDivision = () => {
  result.value += "/";
};

const calculatorTotal = () => {
  result.value = eval(result.value);
};

const resetCalculator = () => {
  result.value = 0;
};
