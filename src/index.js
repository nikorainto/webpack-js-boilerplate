import './main.scss'
import { validateInputs } from './utils/validateInputs'
import { parseInputs } from './utils/parseInputs'

function sumValues() {
  const input1 = document.querySelector('#numberOne').value
  const input2 = document.querySelector('#numberTwo').value

  const parsedInputs = parseInputs([input1, input2])
  if (validateInputs(...parsedInputs)) {
    document.querySelector('#error').classList.add('invisible')
    const [numA, numB] = parsedInputs
    document.querySelector('#result').innerHTML = numA + numB
  } else {
    document.querySelector('#result').innerHTML = ''
    document.querySelector('#error').classList.remove('invisible')
    document.querySelector('#error').innerHTML =
      'Please enter two valid numbers!'
  }
}

const submit = document.querySelector('#addValues')

// Hide error
document.querySelector('#error').classList.add('invisible')

submit.addEventListener('click', sumValues, false)
