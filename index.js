let name = '';
let randomNumber = Math.floor(Math.random() * 100);
let guesses = 0;

console.log(`Рандомное число: ${randomNumber}`);

const output = document.querySelector('#output');
const prompt = document.querySelector('#prompt');
const input = document.querySelector('#prompt input');

prompt.addEventListener('submit', handleSubmit);

input.focus();

printMessage('Введите ваше имя:');

function handleSubmit(event) {
    event.preventDefault();

    processInput(input.value);

    input.value = '';
}

function printMessage(message) {
    let li = document.createElement('li');

    li.textContent = message;

    output.appendChild(li);
}

function clearOutput() {
    for (let i = 0; i < output.children.length; i ++) {
        output.removeChild(output.children[i]);
    }
}

function processInput(input) {
    if (!input) return;

    if (!name) {
        name = input;
        clearOutput();
        printMessage(`${input}, Это игра: "Найди паразита". Введите число от 0 до 100. После вашего ввода, я, буду выводить вам следуюшие сообщения: "Мало", "Много", иначе "Верно!"`);
        return;
    }

    printMessage(input);

    let guess = Number.parseInt(input);

    if (Number.isNaN(guess)) return;

    guesses += 1;

    if (guess > randomNumber) {
        printMessage('Много! Берите по меньше');
    } else if (guess < randomNumber) {
        printMessage('Мало! Берите по Больше');
    } else {
        printMessage('Верно! Вы нашли паразита');
        printMessage(`Кол-во попыток: ${guesses}`);
        printMessage('GAME OVER')

        prompt.remove();
    }

}