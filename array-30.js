function numberArray(array){
   return array.reduce((acumulador, number) => acumulador + number, 0)
}

let numbers = [2, 3, 5, 10, 7, 3];

console.log(numberArray(numbers))