"use strict"

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const question1 = prompt("Один из последних просмотренных фильмов?", "");
const question2 = +prompt("На сколько оцените его?", "");

personalMovieDB.movies[question1:] = question2;


console.log(personalMovieDB);


// const question2 = +prompt("На сколько оцените его?", "");
// const answer1 = (question1);
// const answer2 = (question2);
// personalMovieDB.movies[question1] = question2;
// personalMovieDB.movies[answer1] = answer2;




// Логические операторы

const hamburger = true;
const fries = true;

if(hamburger && fries) {
    console.log("Я сыт!");
}

console.log((hamburger && fries));


// Всегда будут фолс ноль, пустая строка, null, undefined, not a number
const hamburger = 5;
const fries = 0;

if(hamburger && fries) {
    console.log("Я сыт!");
}

console.log((hamburger && fries));

const hamburger = 2;
const fries = 1;

if(hamburger === 3 && fries) {
    console.log("Все сыты");
} else {
    console.log("Мы уходим")
}

//Это вернет false, потому что кола будет выполняться первой по приоритету оператора равно
const hamburger = 2;
const fries = 1;
const cola = 0;

if(hamburger === 3 && cola === 1 && fries) {
    console.log("Все сыты");
} else {
    console.log("Мы уходим")
}

//Циклы
let num = 50;
//пока наши условия не выполнены - выполнять такие-то действия
while (num <= 55) {
    console.log(num);
    num++;
}

//2 вариант
let num = 50;

// сделай
do {
    console.log(num);
    num++;
}
//после того как цикл отработал проверяем условие
while (num < 55);


//цикл for популярный
for (let i = 1; i < 8; i++) {
    console.log(i);
}
//будет повторяться 7 раз
let num = 50;
for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

//завершить цикл

let num = 50;
for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break;
        continue;
    }
    console.log(i);
}

//итерация - повторение цикла



console.log( NaN || 2 || undefined );


console.log( NaN && 2 && undefined );


console.log( 1 && 2 && 3 );


console.log( !1 && 2 || !3 );


console.log( 25 || null && !3 );


console.log( NaN || null || !3 || undefined || 5);


console.log( NaN || null && !3 && undefined || 5);


console.log( 5 === 5 && 3 > 1 || 5);


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 0;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
   } else {
    console.log("None!");
   }


   let hamburger;
   const fries = NaN;
   const cola = 0;
   const nuggets = 2;
   
   
   if (hamburger || cola || fries === 3 || nuggets) {
      console.log('Done!')
   }
   

   let hamburger;
   const fries = NaN;
   const cola = 0;
   const nuggets = 2;
   
   
   if (hamburger && cola || fries === 3 && nuggets) {
      console.log('Done!')
   }
   


for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
        
    }
}

//пирамидка
let result = "";
const length = 7;

for (let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++){
        result += "*";
    }

    result += "\n";
}

console.log(result);


