function playGame() {
    let secretNumber = Math.floor(Math.random() * 5) + 1;
    console.log("secretNumber", secretNumber);

    function guessNumber() {
        let userInput = prompt(
            "Угадай число от 1 до 5 или нажми 'Отмена', чтобы выйти:"
        );

        if (userInput === null) {
            alert("Игра окончена.");
            return;
        } else {
            let guess = +userInput;
            if (isNaN(guess)) {
                alert("Введи число!");
                guessNumber(); //  для повторной попытки угадать число
            } else if (guess > secretNumber) {
                alert("Меньше!");
                guessNumber(); //  для повторной попытки угадать число
            } else if (guess < secretNumber) {
                alert("Больше!");
                guessNumber(); //  для повторной попытки угадать число
            } else {
                alert("Правильно!");
            }
        }
    }

    guessNumber(); //  для первой попытки угадать число
}

playGame();
