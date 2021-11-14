function constraint(length, width) {
  return length < 1 || width < 1 || length > 1000 || width > 1000
}

function getArea(length, width) {
  if (constraint(length, width)) {
    return false
  }
  let area
  area = length * width
  return area
}

function getPerimeter(length, width) {
  if (constraint(length, width)) {
    return false
  }
  let perimeter
  perimeter = 2 * (length + width)
  return perimeter
}

console.log(getArea(3, 4.5))
console.log(getPerimeter(3, 4.5))

//=================================================
function factorial(n) {
  if (n < 0 || n > 10) return false
  if (n == 1 || n == 0) return 1
  let result = n
  while (n > 1) {
    n--
    result *= n
  }
  return result
}

console.log('>>>>>> factorial: ', factorial(1))
//==============================================

function main(r) {
  const PI = Math.PI
  //Solução oficial para resolver o problema
  //let r = +readLine()
  //Solução para resolver no computador pessoal
  console.log(PI * r ** 2)
  console.log(2 * PI * r)
}

main(4)
