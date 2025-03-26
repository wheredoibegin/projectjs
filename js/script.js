// let number = 5;
// const leftBorderWidth = 1;

number = 10;
console.log(number);
"use strict";

// alert('Hello');
// const result = confirm("Are you here?");

для чисел +
const answer = +prompt("Вам есть 18?", "18");
console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша Фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);

// const category = 'toys';

// // console.log(`https://new.com/${category}/5`);

// const user = 'Ivan';
// alert (`Привет, ${user}`);

console.log('arr' + " - object");
console.log(4 + " - object");
// унарный плюс, который прибавляет строку
console.log(4 + +"5"); 

// операторы для сокращения кода
let incr = 10,
    decr = 10;
// оператор инкримента увеличение на единицу и декримента, уменьшение на еденицу
incr++;
decr--;

console.log(incr);
console.log(decr);

// оператор инкримента увеличение на единицу и декримента, уменьшение на еденицу, перед префиксные значения, после постфиксные
++incr;
--decr;

console.log(incr);
console.log(decr);

// ++incr;
// --decr; тоже самое Но есть разница где ставить до или после
let incr = 10,
    decr = 10;

console.log(++incr);
console.log(--decr);

// Остаток от введения двух чисел. Берем 5 и разделяем на 2 столько раз сколько возможно и получаем остаток 1
console.log(5%2);

// == сравнение
console.log (2*4 == 8);

console.log (2*4 == "8");
//=== строгое сравннеие
console.log (2*4 === 8);

//&& - и (два или больше подопытных правдивые выражения оба правда или оба лжи) 
// || или или то правда или то
console.log (2 * 4 == 8);


const isCheked = true,
      isClose = false;
//возвращает правду, только если оба будут правдивыми
console.log (isCheked && isClose);

const isCheked = true,
      isClose = false;
console.log (isCheked || isClose);

// ! оператор отрицания
const isCheked = false,
      isClose = false;
console.log (isCheked || !isClose);

//Не равен
console.log(2 + 2 * 2 != 8);
// !== строгое сравнение по типу fdgfdg
console.log(2 + 2 * 2 !== "6");fgfdg






