/* JS
 a)Заполнить массив заданной длины различными простыми числами.
 */

 function primeArray(arrayLeng) {
  let array = [];
  
  let count = 2;
  while(array.length !== arrayLeng) {
  
    let checkPrime = isPrime(count);
    if(checkPrime) {
      array.push(count);
      count++  
    } else {
      count++
    }
  }
  return array;   
}

function isPrime(n) {
  for(let i = 2; i < n; i++) {
    if(n % i === 0) {
      return false
    }
  }
  return n > 1
}

// b) Найти в строке все числа. Учитывать дробные числа.

function getNumberFromString(string) {
let newArray = [];
let array = string.split(' ');
array.forEach(element => {
  if(isFinite(element)) {
    newArray.push(Number(element));
  }

});

return newArray
}

// c) Замена подряд идущих букв на их количество.

function getNumberOfLetters(string) {
  let newString = "";
  let number = 1;
  for(let i = 0; i < string.length; i++) {
    if(string[i] !== string[i + 1]) {
      newString += string[i];
    }
    if(string[i] === string[i - 1]) {
      number++
    } 
    if(string[i] !== string[i + 1] && number > 1) {
      newString += number;
      number = 1;
    }
  }
  return newString;
}

/*
e) Создать функцию которая при каждом вызове вернет случайное число от 0 до 100 без повторений. Если закончились варианты вернет ошибку. Реализовать через замыкание.
*/


function createRandomNumber(num) {
  let randomArray = [];
  return function createRandom() {
    
    let randomNumber = Math.floor(Math.random() * num) + 1;
    
    return randomArray.includes(randomNumber) ? createRandom() : (randomArray.push(randomNumber), randomNumber);
  }
  
}

let createRandom = createRandomNumber(10);


