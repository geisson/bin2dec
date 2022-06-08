import '../sass/style.scss';

const binaryNumberInput = document.querySelector('[data-input=number-binary]') as HTMLInputElement;
const decimalNumberInput = document.querySelector('[data-input=number-decimal') as HTMLInputElement;
const containerErrorBinary = document.querySelector('[data-erro=error-binary') as HTMLDivElement;

const validateBinaryNumber = (binaryNumber: string, regex: RegExp) => !!new RegExp(regex).exec(binaryNumber);

const convertBinaryToDecimal = (binaryNumber: string) => parseInt(binaryNumber, 2) || '';

const isError = () => {
  containerErrorBinary.classList.remove('c-invisible');
  binaryNumberInput.classList.add('c-data-entry__input--error');
  decimalNumberInput.classList.add('c-data-entry__input--error');
};

const isNotError = () => {
  containerErrorBinary.classList.add('c-invisible');
  binaryNumberInput.classList.remove('c-data-entry__input--error');
  decimalNumberInput.classList.remove('c-data-entry__input--error');
};

const showError = (verifiedValue: boolean) => (verifiedValue ? isError() : isNotError());

const showDecimalNumber = (decimalNumber: number | string, verifiedValue: boolean) => {
  decimalNumberInput.value = !verifiedValue ? decimalNumber.toString() : 'binary number invalid';
};

const handleInput = (event: Event) => {
  const binaryInput = event.target as HTMLInputElement;
  const binaryInputValue = binaryInput.value;

  const ExpCheckDifferentNumber = /([^01])/;
  const verifiedValue = validateBinaryNumber(binaryInputValue, ExpCheckDifferentNumber);
  const decimalNumber = convertBinaryToDecimal(binaryInputValue);

  showError(verifiedValue);
  showDecimalNumber(decimalNumber, verifiedValue);
};

binaryNumberInput.addEventListener('input', handleInput);
