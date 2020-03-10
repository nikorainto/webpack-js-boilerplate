export const validateInputs = (...input) =>
  input.every(num => typeof num === 'number' && !isNaN(num))
