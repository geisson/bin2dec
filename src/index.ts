import '../sass/style.scss';

const binaryNumberInput = document.querySelector('[data-input=number-binary]') as HTMLInputElement;
const decimalNumberInput = document.querySelector('[data-input=number-decimal') as HTMLInputElement;
const containerErrorBinary = document.querySelector('[data-erro=error-binary') as HTMLDivElement;

function handleKeypress(this: HTMLInputElement, e: Event): void {
  const binaryInputValue = this.value;

  const ExpCheckDifferentNumber = /([^01])/;
  const verifiedValue = new RegExp(ExpCheckDifferentNumber).exec(binaryInputValue);

  const convertBinaryToDecimal = parseInt(binaryInputValue, 2);

  if (verifiedValue) {
    containerErrorBinary.classList.remove('invisible');
    binaryNumberInput.classList.add('input-error');
    decimalNumberInput.value = 'binary number invalid';
  } else {
    containerErrorBinary.classList.add('invisible');
    binaryNumberInput.classList.remove('input-error');
    decimalNumberInput.value = convertBinaryToDecimal.toString();
  }
}

binaryNumberInput.addEventListener('input', handleKeypress);
