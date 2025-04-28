for (let i = 5; i < 11; i++) {
    console.log(i);
}


for (let i = 20; i > 9; i--) {
    console.log(i);
    while (i === 13) {
        break;
      }
    }

    function firstTask() {
        // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
        const arr = [3, 5, 8, 16, 20, 23, 50];
        const result = [];
        for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
        }
    
        // Пишем решение вот тут
        console.log(result);
        
        // Не трогаем
        return result;
    }

    

    function firstTask() {
        const arr = [3, 5, 8, 16, 20, 23, 50];
        const result = [];
    
        for (let i = 0; i < arr.length; i++) {
            result[i] = arr[i];
        }
    
        console.log(result);
        return result;
    }
    
    firstTask();



    function secondTask() {
        // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
        const data = [5, 10, 'Shopping', 20, 'Homework'];
    
        // Пишем решение вот тут
        for (let i = 5, i < data.length, i++) {
            data[];
        }
        
        // Не трогаем
        console.log(data);
        return data;
    }



    
 for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}


function fifthTask() {
    const arrayOfNumbers = [];
    
    // Пишем решение вот тут
    for (let i = 5; i === 10; i++) {
        arrayOfNumbers[i - 5] = i;
    }
    
    // Не трогаем
    cosole.log(arrayOfNumbers);
    return arrayOfNumbers;
    
}

const arrayOfNumbers = [];
    
    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++)  {
        arrayOfNumbers[i - 5] = i;
    }
    
    // Не трогаем
    console.log(arrayOfNumbers);
    return arrayOfNumbers;


//     Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к 
// элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    console.log(result);

    
    // Не трогаем
    

  firstTask();



  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}

console.log(result);
return result;




// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - 
// то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === "number") {
            data[i] = data[i] * 2;
        } else if (typeof(data[i]) === "string") {
            data[i] = `${data[i]} - done`;
        }
    }
console.log(data);
    
    
    // Не трогаем
    return data;
}



function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i]

    }
    console.log(result);
    
    
    // Не трогаем
    return result;
}




// *
// ***
// *****
// *******
// *********
// ***********





let result = "";
const levels = 6;
for (let i = 0; i <= levels; i++) {
    for (let j = 0; j < levels - i; j++) {
        result += " ";
    }
for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
}
    result += "\n";
}
console.log (result);