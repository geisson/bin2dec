import '../sass/style.scss';

const binaryNumberInput = document.querySelector('[data-input=number-binary]') as HTMLInputElement;
const decimalNumberInput = document.querySelector('[data-input=number-decimal') as HTMLInputElement;
const containerErrorBinary = document.querySelector('[data-erro=error-binary') as HTMLDivElement;

function handleKeypress(this: HTMLInputElement, e: Event): void {
  const binaryInputValue = this.value;

  const lastDigit = +binaryInputValue.substr(-1);
  if (lastDigit !== 0 && lastDigit !== 1) {
    containerErrorBinary.classList.remove('invisible');
    binaryNumberInput.classList.add('input-error');
  } else {
    containerErrorBinary.classList.add('invisible');
    binaryNumberInput.classList.remove('input-error');
  }

  console.log(`ultimo digitado: ${lastDigit}`);

  const convertBinaryToDecimal = parseInt(binaryInputValue, 2);

  console.log(!convertBinaryToDecimal);

  decimalNumberInput.value = convertBinaryToDecimal.toString();
}

binaryNumberInput?.addEventListener('input', handleKeypress);
