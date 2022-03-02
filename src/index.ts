import '../sass/style.scss';

const binaryNumberInput = document.querySelector('[data-input=number-binary]') as HTMLInputElement;
const decimalNumberInput = document.querySelector('[data-input=number-decimal') as HTMLInputElement;
const containerErrorBinary = document.querySelector('[data-erro=error-binary') as HTMLDivElement;

// eslint-disable-next-line max-len
const checkIfBinaryIsValid = (numberBinary: string, regex: RegExp): boolean => !!(new RegExp(regex).exec(numberBinary));

const convertBinaryToDecimal = (numberBinary: string): number|string => parseInt(numberBinary, 2) || '';

const showError = (verifiedValue: boolean): void => (verifiedValue
  ? (
    containerErrorBinary.classList.remove('invisible'),
    binaryNumberInput.classList.add('input-error'),
    decimalNumberInput.classList.add('input-error')
  ) : (
    containerErrorBinary.classList.add('invisible'),
    binaryNumberInput.classList.remove('input-error'),
    decimalNumberInput.classList.remove('input-error')
  )
);

const showDecimalNumber = (decimalNumber: number|string, verifiedValue: boolean): void => {
  decimalNumberInput.value = !verifiedValue ? decimalNumber.toString() : 'binary number invalid';
};

const handleInput = (event: Event): void => {
  const binaryInput = event.target as HTMLInputElement;
  const binaryInputValue = binaryInput.value;

  const ExpCheckDifferentNumber = /([^01])/;
  const verifiedValue = checkIfBinaryIsValid(binaryInputValue, ExpCheckDifferentNumber);
  const decimalNumber = convertBinaryToDecimal(binaryInputValue);

  showError(verifiedValue);
  showDecimalNumber(decimalNumber, verifiedValue);
};

binaryNumberInput.addEventListener('input', handleInput);
