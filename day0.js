function greeting(parameterVariable) {
  console.log('Hello, World!')
  console.log(parameterVariable)
}
let parameterVariable = 'Welcome to 10 Days of JavaScript!'
console.log('>>>>> Day 0 - Function and argumento')
greeting(parameterVariable)

// ==========================================================

function performOperation(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4
  //secondInteger = parseInt(secondInteger);

  const firstDecimal = 4.0
  //secondDecimal = parseFloat(secondDecimal);

  const firstString = 'HackerRank '

  console.log(firstInteger + parseInt(secondInteger))
  console.log(firstDecimal + parseFloat(secondDecimal))
  console.log(firstString + secondString)
}

performOperation(
  '12',
  '4.32',
  'is the best place to learn and practice coding!'
)
