const arr = ['a', 'b', 'c'];
arr[10] = '3456';

console.log(arr[10]);
console.log(arr);

const arrObj = {
    a: 'a',
    1: 'b',
    2: 'c',
    // внутри объекта другой объект
    abc: {
        def: {

        }

    }
};

const b = 'b';

// arrObj.b = '1234';
arrObj['b'] = '1234';

console.log(arrObj['b']); 
console.log(arrObj.b);
'
// const obj = {a:1, b:2, c:3};

const obj = {
    'Anna': 500,
    'Alice'; 800

};

console.log (obj.a);




const storeName = 'Silpo';
const storeDescription = {
    budget: 10000,
    employees: ['Andy', 'Sandy', 'Bob'],
    products: {
        TV: 5000,
        Apple: 120000
    },
    open: true
};

sda23
sdfdf
sdfdf
fgfdg



//Условие true o false
if (4 === 9) {
    console.log("Ok!");
} else {
    console.log("Error");
}

//Вложеность условий

const num = 50;

if (num < 49) {
    console.log("Error");
} else if (num > 100) {
    console.log ("Много");
} else {
    console.log("Ok");
}

//Тернарный оператор
//Проверяем, если первое условие верно, то это, а если нет, то второе
//Экономит места и объем кода
(num === 50) ? console.log("Ok") : console.log ("Error");

//конструкция свитч всегда идет на строгое сравнение
const num = 51;
switch (num) {
    case 49:
        console.log("No");
        break;
    case 100:
        console.log("No");
        break;
    case 50:
        console.log("Yes");
        break; 
    default:
        console.log("Не в этот раз");
        break;
}
