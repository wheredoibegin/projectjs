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

    