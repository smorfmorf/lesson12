function playGame() {
    let secretNumber;
    let playing = true;

    secretNumber = Math.floor(Math.random() * 5);
    let userInput = prompt(
        "Угадай число от 1 до 5 или нажми 'Отмена', чтобы выйти:"
    );

    if (userInput === null) {
        alert("Игра окончена.");
        playing = false; // Выход из цикла
    } else {
        let guess = +userInput;
        if (isNaN(guess)) {
            alert("Введи число!");
            playGame();
        } else if (guess > secretNumber) {
            alert("Меньше!");
            playGame();
        } else if (guess < secretNumber) {
            alert("Больше!");
            playGame();
        } else {
            alert("Правильно!");
        }
    }
}

playGame();
