function sum (a, b){
  return a + b
} 
function multiply (a, b){
  return a * b
} 
function divide (a, b){
  const divide = a / b
  return divide.toFixed(2)
} 
function subtract (a, b){
  return a - b
} 

export {sum, multiply, divide, subtract}