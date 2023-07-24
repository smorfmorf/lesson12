function playGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let guess = +prompt("Угадай число от 1 до 100:");

    if (guess === null) {
        console.log("Игра окончена.");
        return;
    }

    if (isNaN(guess)) {
        console.log("Введи число!");
        playGame(); // Рекурсивный вызов для перезапуска игры
    } else if (guess > secretNumber) {
        console.log("Меньше!");
        playGame(); // Рекурсивный вызов для продолжения игры
    } else if (guess < secretNumber) {
        console.log("Больше!");
        playGame(); // Рекурсивный вызов для продолжения игры
    } else {
        console.log("Правильно!");
    }
}

playGame();
