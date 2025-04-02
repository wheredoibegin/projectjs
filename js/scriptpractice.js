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

fgfdg