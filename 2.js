function generateAndSumArray(arr) {
    // Генерируем случайное целое число от 0 до 10
    const randomNum = Math.floor(Math.random() * 11);

    // Добавляем сгенерированное число в массив
    arr.push(randomNum);

    // Вычисляем сумму элементов массива
    const sum = arr.reduce((acc, curr) => acc + curr, 0);

    // Проверяем условие: сумма элементов массива меньше 50
    if (sum < 50) {
        // Вызываем функцию снова, передавая обновленный массив
        return generateAndSumArray(arr);
    } else {
        // Если сумма 50 или больше, возвращаем массив
        return arr;
    }
}

// Пример использования функции
const resultArray = generateAndSumArray([]);
console.log(resultArray);
