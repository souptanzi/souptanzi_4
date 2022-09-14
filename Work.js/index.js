// const developerJobType = 'Full-Stack'

// if(developerJobType === 'Front-End') {
//     console.log('2000$')
// }
// if(developerJobType === 'Back-End') {
//     console.log('1500$')
// }
// else if(developerJobType === 'Full-Stack') {
//     console.log('3500$')
// }
// else {
//     console.log('Зарплата не определена')
// }


// Switch case

// switch(developerJobType) {
//    case'Front-End' :
//         console.log('1500$')
//     break
//    case'Back-End' :
//         console.log('2000$')
//     break 
//    case'Full-Stack' :
//         console.log('3500$')
//     break
//     default: 
//         console.log('Зарплата не опредлена')
    
// }


// ? : замена if else
// const favoriteDrink = 'Кофе'
// let message = ''

// if(favoriteDrink === 'Кофе') {
//     console.log('Ваш любимый напиток - это кофе')
// }
// else {
//     console.log('Вы скорее всего любите чай')
// }
// console.log('message', message)

// const message1 = favoriteDrink === 'Кофе'
// ? 'Ваш любимый напиток - это кофе'
// : 'Вы скорее всего любите чай'

// console.log('message1', message1)

// ? :
// ? if
// : else



// const existedUserLogin = 'the_best_user'
// const existedUserPassword = '12345678'

// const userLogin = prompt('Введите логин').trim()
// const userPassword = prompt('Введите пароль').trim()

// if(userLogin === existedUserLogin && userPassword === existedUserPassword) {
//     alert(`Добро пожаловать, ${userLogin}`)
// }
// else {
//     alert('Логин и (или) Пароль введены неверно!')
// }

// const question1 = 'Сколько будет 2 + 2?'
// const question2 = 'Сколько будет 2 * 2?'
// const question3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'
// const question4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'
// const question5 = 'Сколько будет 2 + 2 * 2?'

// const answer1 = 4 
// const answer2 = 4
// const answer3 = 1
// const answer4 = 12
// const answer5 = 6

// let correctAnswers = 0;
// let incorrectAnswers = 0;

// const userAnswer1 = prompt(question1)
// if (Number(userAnswer1) === answer1) {
//     alert('Ответ Верный');
//     correctAnswers += 1;
// } else {
//     alert('Ответ Неверный');
//     incorrectAnswers += 1;
// }

// const userAnswer2 = prompt(question2)
// if (Number(userAnswer2) === answer2) {
//     alert('Ответ Верный');
//     correctAnswers += 1;
// } else {
//     alert('Ответ Неверный');
//     incorrectAnswers += 1;
// }

// const userAnswer3 = prompt(question3)
// if (Number(userAnswer3) === answer3) {
//     alert('Ответ Верный');
//     correctAnswers += 1;
// } else {
//     alert('Ответ Неверный');
//     incorrectAnswers += 1;
// }

// const userAnswer4 = prompt(question4)
// if (Number(userAnswer4) === answer4) {
//     alert('Ответ Верный');
//     correctAnswers += 1;
// } else {
//     alert('Ответ Неверный');
//     incorrectAnswers += 1;
// }

// const userAnswer5 = prompt(question5)
// if (Number(userAnswer5) === answer5) {
//     alert('Ответ Верный');
//     correctAnswers += 1;
// } else {
//     alert('Ответ Неверный');
//     incorrectAnswers += 1;
// }

// alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);


// Методы в Js 
// CharCodeAt - выводит код символов, букв и т.д

// Очень популярен в нахождении ошибок(багов) в коде
// console.log()! Также можно использовать и debugger 

// let health = prompt('Введите число параметра "здоровье" для персонажа')

// if (health < 0 || !health) {
//    alert('Параметр "здоровье" должен быть больше нуля!')
// } else {
//    alert(`Параметр "здоровье" равен ${health}`);
// }

// let health = prompt('Введите число параметра "здоровье" для персонажа')

// if (health < 0 || !health) {
//    alert('Параметр "здоровье" должен быть больше нуля!')
// } else {
//    alert(`Параметр "здоровье" равен ${health}`);
// }


// const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');

// if (temperatureInCelsius === 0) {
//    alert('0 градусов по Цельсию - это температура замерзания воды')
// } else if (temperatureInCelsius > 0) {
//    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
// }

// const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
// alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по 
// Фаренгейту.`);


// const salaryOfJuniorDeveloper = 500;
// const numberOfJuniorDevelopers = 3;
// let taxPercentage = 13;
// let totalJuniorDevelopersSalary = 0;
                
// for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
//    const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
//    totalJuniorDevelopersSalary += salaryWithTax;
// }
// console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);

// debugger;
// let temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');
// debugger;
// temperatureInCelsius = Number(temperatureInCelsius);
 
// debugger;
// if (temperatureInCelsius === 0) {
//     alert('0 градусов по Цельсию - это температура замерзания воды')
// } else if (temperatureInCelsius > 0) {
//     alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
// }

// debugger;
// const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
// alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);


// function Expression
// feedanimal('Лев')

// Function feedanimal(animalName = 'Собака') {
//     console.log(`Животное ${animalName} было покормлено`)
// }

// Function Declaration
// const feedanimal = function(animalName = 'Собака') {
//     console.log(`Животное ${animalName} было покормлено`)
// }

// feedanimal('Жираф')

// Стрелочная функция 
// const feedanimal = animalName => {
//     console.log(`Животное ${animalName} было покормлено`)
// }

// feedanimal('Тигр')

// Return 
// const multiplyByPlay = (number) => {
//     return number * 5
// }

// const multiplyByPlay = (number) => number * 5 // Если параметров больше, чем 1, то круглые скобки обязательны, так как без них ничего работать не будет.

// const result = multiplyByPlay(10) 
// console.log('result', result)


// НЕПРАВИЛЬНЫЕ НАЗВАНИЯ 

// Обновляет контент для слайдера 
// function update() {}

// возврашает пользователя на предыдущую страницу
// function back() {}

// воспроизводит голос птицы 
// function sound() {}

// ПРАВИЛЬНЫЕ НАЗВАНИЯ 
// function updateSliderContent() {

// }

// function goBackPreviousPage() {

// }

// function makeSoundOfBird() {

// }


// Задания
// const getName1 = function(name) {
//     return `Имя равно ${name}`;
// }

// function getName2(name) {
//     return `Имя равно ${name}`;
// }

// const getName3 = (name) => `Имя равно ${name}`;

// console.log('getName1', getName1('getName1'));
// console.log('getName2', getName2('getName2'));
// console.log('getName3', getName3('getName3'));

// №1
// const getSumOfNumbers = (number, type = 'odd') => {
//     return 
// }


// let sum = 0
// let number = 1

// for(sum; sum < 50; sum += number) {
//     sum += number
// }

// console.log('sum', sum)


// Необходимо создать функцию getSumOfNumbers. Она будет считать сумму от 0 до переданного числа. Выберите любой из 3 типов при создании функции.

// getSumOfNumbers принимает в себя 2 параметра: number и type.

// Параметр number - это число, до которого будет считаться сумма. То есть, если было передано число 10,
//  то функция должна посчитать сумму от 0 до 10 (0 + 1 + 2 + … + 10).

// Параметр type отвечает за выбор чисел для подсчета суммы. Он может быть 3-мя значениями: “odd”, “even” и “”. 
// Если type равняется “odd”, то в сумму должны входить только нечетные числа, “even” - четные числа, пустая строка “” - все числа. 
// По умолчанию параметр type должен быть равен odd.

// Функция getSumOfNumbers должна возвращать итоговую сумму с помощью return.

// Возможные результаты функции getSumOfNumbers:

// number = 10, type = ‘odd’. Возвращает 25.
// number = 10, type = ‘even’. Возвращает 30.
// number = 10, type = "". Возвращает 55.



// const getSumOfNumbers = (number, type = "odd") => {
//     if (typeof number !== "number") {
//       return NaN;
//     }
  
//     let sum = 0;
//     for (let i = 0; i <= number; i++) {
//       const isEven = i % 2 === 0;
//       const isOdd = !isEven;
//       if (type === "") {
//         sum = sum + i;
//       } else if (isEven && type === "even") {
//         sum += i;
//       } else if (isOdd && type === "odd") {
//         sum += i;
//       }
//     }
  
//     return sum;
//   }
  
//   const result = getSumOfNumbers(10, "");
//   console.log("result", result);


// function getDivisorsCount(number = 1) {

// }


// function getDivisors(number) {
//     if (typeof number !== "number") {
//       return NaN;
//     }
  
//     if (!Number.isInteger(number) || number < 0) {
//       alert("number должен быть целым числом и больше нуля!");
//       return;
//     }
  
//     let counter = 0;
//     for (let i = number; i > 0; i--) {
//       if (number % i === 0) {
//         counter++;
//       }
//     }
  
//     return counter;
//   }
  
//   const result = getDivisors(5);
//   console.log("result", result);
  

// Функции правктическое задание №4
// function checkQuestionAnswer(question, correctAnswer) {
//     let answer = prompt(question);
//     if (answer === null) return;
//     if (answer.trim().toLowerCase() === correctAnswer.toLowerCase())
//         alert("Ответ верный");
//     else
//         alert("Ответ неверный");
// }

// checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
// checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
// checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');


// function greeting(name) {
//     alert('Hello ' + name);
//   }
  
//   function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
//   }
  
//   processUserInput(greeting);


// function getName1(name) {
//     return `Имя равно ${name}`
// }

// const getName2 = function(name) {
//     return `Имя равно ${name}`
// }

// const getName3 = name => `Имя равно ${name}`

// console.log('getName1', getName1('getName1'))
// console.log('getName2', getName1('getName2'))
// console.log('getName3', getName1('getName3'))


// function getSumOfNumbers(number, type = 'odd') {
//     if(typeof number !== 'number') {
//         return NaN
//     }

//     let sum = 0
//     for(let i = 0; i <= number; i++) {
//         const isEven = i % 2 === 0
//         const isOdd = !isEven

//         if (type === "") {
//             sum += i
//         } else if (isEven && type === 'even') {
//             sum += i
//         } else if (isOdd && type === 'odd') {
//             sum += i
//         }
//     }
//     return sum

// }

// const esult = getSumOfNumbers(10, 'even')
// console.log('result', result)

// function showSuccessMessage(message) {
//     console.log(message)
// }
// showSuccessMessage('В данном тексте нет запрещенных символов')

// function showErrorMessage(message) {
//     console.error(message)
// }
// showErrorMessage('Маммамия')

// function checkTextOnErrorSymbol(text, errorSymbol, succesCallback, errorCallback) {
//     if (text === errorSymbol) {
//         errorCallback
//     } else {
//         succesCallback  
//     }
// }

// const text = 'Привет! Как дела! Давно мы с тобой не виделись.'; 
// checkTextOnErrorSymbol(text, 'а', showSuccessMessage(), showErrorMessage());



// let y = text

// let i = text.indexOf('a')

// if (y === i) {
//     alert('Ты уродна бестыжая')
// }


// Урок 5 Работа со строками
// const name = 'Ахмед'
// const name1 = prompt('Введите ваше имя')
// console.log('name', name.length)
// console.log('name', name[3])

// console.log('name', name.indexOf('м'))
// console.log('name', name.includes('д'))

// console.log('name', name.toLowerCase())
// console.log('name', name.toUpperCase())

// console.log('name', name.slice(1, 3))

// console.log('name', name.replace('хмед', 'жоп'))
// console.log('name', name.replaceAll('А', 'а'))

// console.log('name', name.repeat(4))

// console.log('name', name1.trim())

// let text = 'iocdslfkzjvbsfdl'
// console.log('text', text.length - 1)

// let userAnswer = prompt('Как вас зовут?');
// userAnswer = userAnswer.trim().toLowerCase()

// alert(`Вас зовут ${userName}`)


// let userAnswer1 = prompt('Сколько вам лет?')
// userAnswer1 = Number(userAnswer1)

// alert(`Вас зовут ${userName} и вам ${userAge} лет`)

// const userString = prompt('Введите текст для обрезки')
// let startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки')
// let endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки')
// startSliceIndex = Number(startSliceIndex)
// endSliceIndex = Number(endSliceIndex)

// const resultString = userString.trim().slice(startSliceIndex, endSliceIndex)
// alert(`Результат: ${resultString}`)

// let userText = prompt('Введите текст')
// userText = userText.trim()
// let wordFromText = prompt('Введите слово из текста')
// wordFromText = wordFromText.trim()

// const indexOfWord = userText.indexOf(wordFromText)
// const resultString = userText.slice(0, indexOfWord)

// alert(`Результат: ${resultString}`)

// let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';
// const middleIndex = Math.floor(javaScriptDescription.length / 2);
// javaScriptDescription = javaScriptDescription
//     .slice(0, middleIndex)
//     .replaceAll('а', 'А')
//     .replaceAll(' ', '')
//     .repeat(3)
// const updatedMiddleIndex = Math.floor(javaScriptDescription.length / 2);
// console.log(javaScriptDescription[updatedMiddleIndex]);
// console.log(javaScriptDescription);


// const showSuccessMessage = (message) => {
//     console.log(message);
// }

// const showErrorMessage = (message) => {
//     console.error(message);
// }

// const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
//     let errors = 0;
//     for (let i = 0; i < text.length; i ++) {
//         const currentSymbol = text[i];
//         if (currentSymbol === errorSymbol && errorCallback) {
//             errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`);
//             errors ++;
//         };
//     };

//     if (successCallback && errors === 0) {
//         successCallback('В данном тексте нет запрещенных символов');
//     };
// };

// const text = 'Привет! Как дела! Давно мы с тобой не виделись.'
// checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);


// function showSuccessMessage(message) {
//     console.log(message)
// }

// function showErrorMessage(message) {
//     console.error(message)
// }

// function checkTextOnErrorSymbol(text, errorSymbol, succesCallback, errorCallback) {
//     let errors = 0 
//     for(let i = 0; i < text.length; i++) {
//         const currentSymbol = text[i] 
//         if (currentSymbol === errorSymbol && errorCallback) {
//             errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`);
//             errors++
//         }
//     }

//     if (succesCallback && errors === 0) {
//         succesCallback('В данном тексте нет запрешенных символов')
//     }
// }

// const text = prompt('Введите какойто текст, только на русском')
// checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage)


// const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

// const giveParcel = () => {
//     const clientName = peopleWaiting.shift();
//     alert(`${clientName} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
// }

// const leaveQueueWithoutParcel = () => {
//     const clientName = peopleWaiting.pop();
//     alert(`${clientName} не получил(а) посылку и ушел(ла) из очереди`);
// }

// giveParcel();
// giveParcel();
// giveParcel();

// for (let i = peopleWaiting.length; i > 0; i -= 1) {
//     leaveQueueWithoutParcel();
// }


// const getSumOfSequence = (number) => {
//     const finalArray = [];
//     for (let i = 1; i <= number; i += 1) {
//         finalArray.push(i);
//     }

//     return finalArray[0] + finalArray[finalArray.length - 1]
// };

// const result = getSumOfSequence(10);
// console.log('result', result);


// const getSumOfNumbers = (i) => {
//     const finalArray = ['Я', 'Люблю', 'Себя!!!', 'Шучу', 'Тебя, Любимая)))']
//     for (i; i < finalArray.length; i ++) {
//         alert(finalArray[i])
//     }  

    
// }

// getSumOfNumbers(0)


// function getSumOfNumbers(number, type = 'odd') {
//     if(typeof number !== 'number') {
//         return NaN
//     }

//     let sum = 0
//     for(let i = 0; i <= number; i++) {
//         const isEven = i % 2 === 0
//         const isOdd = !isEven

//         if (type === "") {
//             sum += i
//         } else if (isEven && type === 'even') {
//             sum += i
//         } else if (isOdd && type === 'odd') {
//             sum += i
//         }
//     }
//     return sum

// }



// const map = [500, 500, 100, 500, 400] 

// const salary = map.filter((salary, index, array) => {
//     return index % 2 === 0;
// })

// console.log(salary)


// const getSumOfSequence = (number) => {
//     const finalArray = [];
//     for (let i = 1; i <= number; i += 1) {
//         finalArray.push(i);
//     }

//     return finalArray[0] + finalArray[finalArray.length - 1];
// };

// const result = getSumOfSequence(10);
// console.log('result', result);

// 9. Массивы - 1
// length
// push, unshift (Добавление элементов <= && =>)
// shift, pop (Удаление элементов)

// Пример:
// map[значение элемента, индекс элемента, и массив, по которому осуществляется проход]


// map
// filter 
// find
// findIndex
// reduce (Главная задача - спомощью элементов массива получить одно значение. Пример - получить сумму двух чисел)
// some, every (some - выводит true, если хотябы один элемент удовлетворяет условию; every - выводит true, если все элементы удовлетворяют условию)


// const coffees = ["Latte", "Cappuccino", "Americano"];

// let favoriteCoffeeName = prompt("Поиск кофе по названию:");
// favoriteCoffeeName = favoriteCoffeeName?.trim().toLowerCase();

// const favoriteCoffeeIndex = coffees.findIndex((coffee) => coffee.toLowerCase() === favoriteCoffeeName
// );
// const favoriteCoffee = coffees[favoriteCoffeeIndex];
// if (favoriteCoffee) {
//     alert(
//         `Держите ваш любимый кофе ${favoriteCoffee}. Он ${favoriteCoffeeIndex + 1
//         }-й по популярности в нашей кофейне.`
//     );
// } else {
//     alert("К сожалению, такого вида кофе нет в наличии");
// }


// const array = [500, 400, 2000, 400]

// const favoriteCoffeeIndex = array.findIndex((salary) => salary === 400
// );

// const sum = array[favoriteCoffeeIndex]

// console.log(favoriteCoffeeIndex)
// console.log(sum)


// const coffees = ["Latte", "Cappuccino", "Americano"];
// const prices = [1.5, 1, 2];

// let favoriteCoffeeName = prompt("Поиск кофе по названию:");
// favoriteCoffeeName = favoriteCoffeeName?.trim().toLowerCase();

// const favoriteCoffeeIndex = coffees.findIndex((coffee) => coffee.toLowerCase() === favoriteCoffeeName
// );
// const favoriteCoffee = coffees[favoriteCoffeeIndex];
// if (favoriteCoffee) {
//     alert(
//         `Держите ваш любимый кофе ${favoriteCoffee}. Он ${favoriteCoffeeIndex + 1
//         }-й по популярности в нашей кофейне.`
//     );
// } else {
//     alert("К сожалению, такого вида кофе нет в наличии");
// }


// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// const prices = [1.5, 1, 2];

// const updatedPrices = prices.map((price) => price + 0.5);

// coffees.forEach((coffeeName, index) => {
//     alert(`Кофе ${coffeeName} сейчас стоит ${updatedPrices[index]} евро.`);
// });


// Своя работа:
// const clothing = ['black pants', 'white shift', 'green sneakers'];
// const prices = [199, 169, 179]

// const updatedPrices = prices.map((price) => price + 9.99);

// clothing.forEach((clothingName, index) => {
//     alert(`Одежда ${clothingName} сейчас стоит ${updatedPrices[index]} евро`)
// });


// const clientsEstimations = [];

// const askClientToGiveEstimation = () => {
//     const clientEstimationString = prompt(
//         "Как вы оцениваете нашу кофейню от 1 до 10?"
//     );
//     const clientEstimation = Number(clientEstimationString);
//     if (clientEstimation >= 1 && clientEstimation <= 10) {
//         clientsEstimations.push(clientEstimation);
//     }
// };

// for (let i = 0; i < 5; i += 1) {
//     askClientToGiveEstimation();
// }

// const goodEstimations = clientsEstimations.filter(
//     (estimation) => estimation > 5
// );
// const notGoodEstimations = clientsEstimations.filter(
//     (estimation) => estimation <= 5
// );

// console.log(goodEstimations, notGoodEstimations);

// alert(
//     `Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`
// );


// const mamEstimations = [];

// const askMamToGiveEstimation = () => {
//     const PersonEstimationString = prompt('На сколько вы оцениваете свою Маму?');
//     const PersonEstimation = Number(PersonEstimationString);
//     if (PersonEstimation >= 1 && PersonEstimation <= 10) {
//         mamEstimations.push(PersonEstimation)
//     };
// };

// for (let i = 0; i < 5; i ++) {
//     askMamToGiveEstimation()
// };

// const goodEstimations = mamEstimations.filter(
//     (estimation) => estimation > 5
// );

// const notGoodEstimations = mamEstimations.filter(
//     (estimation) => estimation <= 5
// );

// console.log(goodEstimations, notGoodEstimations)

// alert(`Всего положительных оценок ${goodEstimations.length}; Всего отрицательных оценок ${notGoodEstimations.length}`)


// const estimationCar = [];

// const askClientToGiveEstimation = () => {
//     const estimationClient = prompt('На сколько вы оцениваете марку Мерседес');
//     const getEstimationClient = Number(estimationClient);
//     if (getEstimationClient >= 1 && getEstimationClient < 10) {
//         estimationCar.push(getEstimationClient)
//     };
// };

// for (let i = 0; i < 5; i ++) {
//     askClientToGiveEstimation()
// };

// const goodEstimations = estimationCar.filter(
//     (estimation) => estimation > 5
// );

// const notGoodEstimations = estimationCar.filter(
//     (estimation) => estimation <= 5
// );

// console.log(goodEstimations, notGoodEstimations)

// alert(`Всего положительных оценок ${goodEstimations.length}; Всего отрицательных оценок ${notGoodEstimations.length}`)

// const salariesOfDevelopers = [400, 200, 500, 600, 350];

// const sum = salariesOfDevelopers.reduce((acc, salary, index, array) => {
//     console.log('acc/salary', acc, salary) 
//     return acc + salary;
// }, 0);

// console.log('sum', sum)


// Необходимо посчитать сумму кубов всех чисел в массиве. Например, для массива [1, 5, 9] должен быть следующий результат:
// 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// Задание №6
// 1. for
// const numbers = [10, 4, 100, -5, 54, 2];

// let sum1 = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     sum1 += numbers[i] ** 3;
// };
// console.log('sum1', sum1);

// 2. for of
// const numbers = [10, 4, 100, -5, 54, 2];

// let sum2 = 0;
// for (const number of numbers) {
//     sum2 += number ** 3;
// }
// console.log('sum2', sum2);


// 3. forEach
// const numbers = [10, 4, 100, -5, 54, 2];

// let sum3 = 0;

// numbers.forEach((number) => {
//     sum3 += number ** 3;
// });

// console.log('sum3', sum3)

// 4. reduce

// const sum4 = numbers.reduce((acc, number) => {
//     return acc + number ** 3;
// }, 0);
// console.log('sum4', sum4);

// const numbers = [10, 4, 100, -5, 54, 2];

// console.log(numbers)
// const sum4 = numbers.reduce((acc, number) => {
//     console.log('acc/number', acc, number)
//     return acc + number ** 3
// }, 0);

// console.log('sum4', sum4)

// 5. Урок 
// < 0 - по убыванию
// > 0 - по возрастанию
// 0

// const salariesOfDevelopers = [400, 2000, 500, 600, 350];
// const salariesOfDevelopers = ['Maxim', 'Igor', 'Nastya', 'Irina'];

// salariesOfDevelopers.sort() - сортирует по возрастанию

// salariesOfDevelopers.sort((a, b) => {
//     if (a < b) {
//         return -1
//     }
// });

// console.log('salariesOfDevelopers' ,salariesOfDevelopers) 


// 6. урок - методы

// Splice
// const cars = ['BMW', 'Mercedes', 'Lada'];

// const removedElements = cars.splice(0, 2, 'Audi', 'Bugatti');
// console.log('removedElements', removedElements);

// console.log('cars', cars);

// slice 
// const ageOfDevelopers = [25, 10, 45, 30];
// console.log(ageOfDevelopers.slice(0, 2));
// const slicedAgesOfDeveloper = ageOfDevelopers.slice(0, 2);
// console.log('slicedAgesOfDeveloper', slicedAgesOfDeveloper);
// console.log('ageOfDevelopers', ageOfDevelopers);

// indexOf
// const favoriteFood = ['Мороженое', 'Торт', 'Кофе'];
// const indexOfFood = favoriteFood.indexOf('1234');
// console.log('indexOfFood', indexOfFood);

// includes
// const technologies = ['JavaScript', 'HTML', 'CSS'];
// const technologyExists = technologies.includes('JavaScript');
// console.log('technologyExists', technologyExists);

// split + join

// split 
// const listOfOrders = 'Майка, Шорты, Кроссовки, Рюкзак';
// const listOfOrdersArray = listOfOrders.split(', '); // запятая и пробел - чтобы убрать пробел у элементов в массиве
// console.log('listOfOrdersArray', listOfOrdersArray);

// // join
// const ordersString = listOfOrdersArray.join(', '); // запятая и пробел чтобы сделать пробел между элементами массива
// console.log('ordersString', ordersString);

// reverse
// technologies.reverse();
// console.log('techmologies', technologies);


// 7. урок - Объединение нескольких массивов в один

// ['Maxim', 'Oleg', 'Anton', 'Gleb']

// concat
// const currentDeveloper = ['Maxim', 'Oleg'];
// const newDeveloper = ['Anton', 'Gleb'];

// // const allDevelopers = currentDeveloper.concat(newDeveloper);
// console.log('allDevelopers', allDevelopers);

// spread = ...
// const allDevelopers = [
//     ...currentDeveloper,
//     ...newDeveloper
// ]
// console.log('allDevelopers', allDevelopers)


// 1.

// const showSuccessMessage = (message) => {
//     console.log(message);
// }

// const showErrorMessage = (message) => {
//     console.error(message);
// }

// const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
//     let errors = 0;
//     for (let i = 0; i < text.length; i ++) {
//         const currentSymbol = text[i];
//         if (currentSymbol === errorSymbol && errorCallback) {
//             errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`);
//             errors ++;
//         };
//     };

//     if (successCallback && errors === 0) {
//         successCallback('В данном тексте нет запрещенных символов');
//     };
// };

// const text = 'Привет! Как дела! Давно мы с тобой не виделись.'
// checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);


// const goals = [8, 1, 1, 3, 2, -1, 5];

// const number = goals.findIndex((index) => index);

// let numberOfGoals = goals.filter((numberOfGoals, number) => {
//     return numberOfGoals.length <= 8
// });
// // 2.
// alert(`Самый результативный матч был под номером ${number}. В нем было забито ${numberOfGoals} гол(ов).`);

// const numbers = goals.filter((number) => {
//     return number < 2 && number > -1
// });

// numberOfGoals = goals.filter((number, index) => {
//     return index === 1 && index < 3
// });

// if (numberOfGoals < 2) {
//     alert(`Самые нерезультативные матчи были под номерами ${numbers}. В каждом из них было забито по ${numberOfGoals} мячу(а).`)
// }

// // 3.
// numberOfGoals = goals.reduce((acc, number) => {
//     if (number === -1) {
//         return number + 1
//     }
//     return acc + number 
// });

// alert(`Общее количество голов за сезон равно ${numberOfGoals}`)

// let arr = [1, 2];

// let arrayLike = {
//   0: "что-то",
//   1: "ещё",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2
// };

// alert( arr.concat(arrayLike) ); // 1,2,что-то,ещё

// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];
  
//   let user = users.find(item => item.name == "Маша");
  
//   alert(user.id); // Вася

//   let users1 = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];
  
//   // возвращает массив, состоящий из двух первых пользователей
//   let someUsers = users1.filter(item => item.id < 3); // Выводит количество id удовлетворяющих условию, приобразовав их в сумму (т.е в нашем случае количество удовлетворяющих условию будет - 2)
  
//   alert(someUsers.length); // length - для того чтобы вывести результат, иначе выведется объект


//   function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
//   }
  
//   let arr = [ 1,  15, 2 ];
  
//   arr.sort(compareNumeric);
  
//   alert(arr);  // 1, 2, 15


// [1, 20, 15, 2, 0, 8].sort(function(a, b) {
//     alert( a + b );
//   });


//   let arr = [10000, 1, 15, 2, 100, 1000];

    // arr.sort( (a, b) => a - b );
    // alert(arr)

// arr.sort(function(a, b) { return a - b; }); // a - b: по порядку выводит элементы, a + b: выводит элементы как есть 

// alert(arr);


// let str = "тест";

// alert( str.split('') ); // т,е,с,т


// const arr = 'dfev, dfrejf, dewcahj'

// const str = arr.split('; ')

// for (let name of str) {
//     alert(`сообщение получат: ${name}`)
// }

// let arr = [1, 2, 3, 4, 5];

// // убрано начальное значение (нет 0 в конце)
// let result = arr.reduce((sum, current) => sum + current);

// alert( result ); // 15

// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// const sum = arr.reduceRight((acc, salary) => {
//     console.log('acc/salary', acc, salary)
//     return acc + salary
// });

// for (let i = 1; i < 10; i ++) {
//     for (let k = 1; k < 10; k ++) {
//         console.log(`${i}*${k}=${k * i}`);
//     }
// };  

// const arrayNumber = [1, 2, 3, 4, 5];
// for (let i = 0; i < 1; i ++) {
//     for (let k = 0; k < 3; k ++) {
//         console.log(arrayNumber)
//     }
// }

// const name = 'Джон'

// const admin = name
// alert(admin)

// const world;
// const userName;


// const matrix = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ],
// ];

// const getMatrixJoin= matrix.join(';')

// const oneWouldMatrix = matrix.concat(getMatrixJoin)

// console.log(oneWouldMatrix)


// const checkQuestionAnswer = (question, correctAnswer) => {
//     let userAnswer = prompt(question);
//     userAnswer = userAnswer.trim().toLowerCase();
//     if (correctAnswer.toLowerCase() === userAnswer) {
//         alert('Ответ Верный');
//     } else {
//         alert('Ответ Неверный');
//     }
// }

// checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
// checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
// checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');


// const showSuccessMessage = (message) => {
//     console.log(message);
// }

// const showErrorMessage = (message) => {
//     console.error(message);
// }

// const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
//     let countErrors = 0;
//     for (let i = 0; i < text.length; i ++) {
//         const currentSymbol = text[i];
//         if (currentSymbol === errorSymbol && errorCallback) {
//             errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`);
//             countErrors ++;
//         };
//     };

//     if (successCallback && errors === 0) {
//         successCallback('В данном тексте нет запрещенных символов');
//     };
// };

// const text = 'Привет! Как дела! Давно мы с тобой не виделись.'
// checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);


// const showSuccessMessage = (message) => {
//     console.log(message);
// }

// const showErrorMessage = (message) => {
//     console.error(message);
// }


// const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
//     let errors = 0;
//     for (let i = 0; i < text.length; i += 1) {
//         const currentSymbol = text[i];
//         if (currentSymbol === errorSymbol && errorCallback) {
//             errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`);
//             errors += 1
//         };
//     };

//     if (successCallback && errors === 0) {
//         successCallback('В данном тексте нет запрещенных символов');
//     };
// };

// const text = 'Привет! Как дела! Давно мы с тобой не виделись.'; 
// checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);


// const goals = [8, 1, 1, 3, 2, -1, 5];

// const number = goals.findIndex((index) => {
//     return Math.max(index)
// });
// console.log(number)

// let numberOfGoals = goals.reduce((acc, number) => {
//     return Math.max(acc, number)
// });

// alert(`Самый результативный матч был под номером ${number}. В нем было забито ${numberOfGoals} гол(ов).`)


// const numbers = goals.filter((number) => {
 
// });

// numberOfGoals = goals.filter((number) => {
//     if (number < 2 && number > 0) {
//         return number
//     } 
// });


// alert(`Самые нерезультативные матчи были под номерами ${numbers}. В каждом из них было забито по ${numberOfGoals} мячу(а)`)


// numberOfGoals = goals.reduce((acc, number) => {
//     if (number ) {
//         return acc + number
//     }
// }, 0);

// alert(`Общее количество голов за сезон равно ${numberOfGoals}`)

// const number1 = goals.find((number) => {
//     if (number === -1) {
//         alert('Были автоматические поражения: да')
//     }
// }); 


// goals.sort((a, b) => {
//     return a - b;
// });


// const arrayNumbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < 1; i ++) {
//     for (let k = 0; k < 3; k ++) {
//         console.log(arrayNumbers)
//     }
// }


// const matrix = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ],
// ];

// const getMatrix = matrix[0]
// const matrixNumbersRight = getMatrix.concat(matrix[1], matrix[2])

// console.log(matrixNumbersRight)


// const showSuccessMessage = (message) => {
//     console.log(message);
// }

// const showErrorMessage = (message) => {
//     console.error(message);
// }

// const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
//     let countErrors = 0;
//     for (let i = 0; i < text.length; i += 1) {
//         const currentSymbol = text[i];
//         if (currentSymbol === errorSymbol && errorCallback) {
//             errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`);
//             countErrors += 1;
//         }
//     }

//     if (successCallback && countErrors === 0) {
//         successCallback('В данном тексте нет запрещенных символов');
//     }
// }

// const text = 'Привет! Как дела! Давно мы с тобой не виделись.'
// checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);




// const goals = [8, 1, 1, 3, 2, -1, 5];

// let maxNumberOfGoals = goals[0];
// let maxNumberOfGoalsIndex = 0;

// let minNumberOfGoals = goals[0];

// goals.forEach((goalNumber, index) => {
//     if (goalNumber > maxNumberOfGoals) {
//         maxNumberOfGoals = goalNumber;
//         maxNumberOfGoalsIndex = index;
//     } 
//     if (goalNumber < minNumberOfGoals && goalNumber >= 0) {
//         minNumberOfGoals = goalNumber;
//     }
// });

// const matchesWithMinNumberOfGoals = goals
//     .map((goalNumber, index) => goalNumber === minNumberOfGoals ? index + 1 : -1)
//     .filter((goalNumber) => goalNumber > 0)
//     .join(', ');

// alert(`Самый результативный матч был под номером ${maxNumberOfGoalsIndex + 1}. В нем было забито ${maxNumberOfGoals} гол(ов).`);
// alert(`Самые не результативные матчи были под номерами ${matchesWithMinNumberOfGoals}. В каждом из них было забито ${minNumberOfGoals} мяча(у).`);

// const numberOfGoalsPerSeason = goals.reduce((acc, goalNumber) => {
//     return goalNumber >= 0 ? acc + goalNumber : acc
// }, 0);

// alert(`Общее количество голов за сезон равно ${numberOfGoalsPerSeason}`);

// const wereAutomaticLoses = goals.some((goalNumber) => goalNumber < 0);
// if (wereAutomaticLoses) {
//     alert('Были автоматические поражения: да');
// } else {
//     alert('Были автоматические поражения: нет');
// }

// const averageNumberOfGoalsPerMatch = numberOfGoalsPerSeason / goals.length;

// alert(`Среднее количество голов за матч равно ${averageNumberOfGoalsPerMatch}`);

// const ascendingOrderGoals = [...goals].sort((a, b) => a - b);

// alert(ascendingOrderGoals.join(', '));



// const map2 = goals.forEach((number) => {
//     alert(number)
// })


// function showMessage(from, text) {

//     from = '*' + from + '*'; // немного украсим "from"
  
//     alert( from + ': ' + text );
//   }
  
//   let from = "Аня";
  
//   showMessage(from, "Привет"); // *Аня*: Привет
  
//   // значение "from" осталось прежним, функция изменила значение локальной переменной
//   alert( from ); // Аня


// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('А родители разрешили?');
//   }
// }

// let age = prompt('Сколько вам лет?', 18);

// if ( checkAge(age) ) {
//   alert( 'Доступ получен' );
// } else {
//   alert( 'Доступ закрыт' );
// }


// function showMovie(age) {
//     if ( !checkAge(age) ) {
//       return;
//     }
  
//     alert( "Вам показывается кино" ); // (*)
//     // ...
//   }
  
//   showMovie()

//  let i = 0;
// while (i != 10) {
//   i += 0.2;
// }

// let i = 0;
// while (i < 11) {
//   i += 0.2;
//  console.log( i );
// }



// let range = {
//   from: 1,
//   to: 5
// };

// // 1. вызов for..of сначала вызывает эту функцию
// range[Symbol.iterator] = function() {

//   // ...она возвращает объект итератора:
//   // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
//   return {
//     current: this.from,
//     last: this.to,

//     // 3. next() вызывается на каждой итерации цикла for..of
//     next() {
//       // 4. он должен вернуть значение в виде объекта {done:.., value :...}
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     }
//   };
// };

// // теперь работает!
// for (let num of range) {
//   alert(num); // 1, затем 2, 3, 4, 5
// }

// let str = '𝒳😂';
// for (let char of str) {
//     alert( char ); // 𝒳, а затем 😂
// }


// let height = 0

// alert(height || 100); // 100
// alert(height ?? 100);


// let height = null
// let width = null

// let area = (height ?? 200) * (width ?? 200)
// alert(area)

// "use strict";

// const showSuccessMessage = (message) => {
//   console.log(message);
// }

// const showErrorMessage = (message) => {
//   console.error(message);
// }

// const checkTextOnErrorSymbol = (text, errorSymbol, succesCallback, errorCallback) => {
//   let errors = 0;

//   for (let i = 0; i < text.length; i ++) {
//     const currentSymbol = text[i];
//     if (currentSymbol === errorSymbol && errorCallback) {
//       errorCallback(`Найден запрешенный символ "${errorSymbol}" под индексом "${i}"`)
//       errors += 1
//     };
//   };

//   if (succesCallback && errors === 0) {
//     succesCallback('В данном тексте нет запрешенных символов')
//   }
// }

// let searchText = prompt('Введите тестк и мы исправим в нем синтаксические ошибки') 
// searchText = searchText.trim().toLowerCase();

// if (searchText.trim().toLowerCase() === searchText.toLowerCase()) {
//   searchText;
// }

// checkTextOnErrorSymbol(searchText, 'а', showSuccessMessage, showErrorMessage);



// alert(typeof function(){} === 'function') // true
// alert(typeof null === "object") // true

// alert(172828304962802613333122074272497021661651059147918384873848483993994848392920200201148393998485903718n) // n(BigInt) вывод польностью числа


// Call-back функция
// function ask(question, correctAnswer) {
//     let answer = prompt(question);

//     if(answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
//         showSunSistems()
//     } else {
//         showSunTime()
//     };
// }

// function showSunSistems() {
//     alert('Ответ верный');
// }

// function showSunTime() {
//     alert('Ответ неверный');
// }

// ask('Сколько планет в Солнечной системе?', '8 планет');
// ask('За какое время свет Солнца достигает Земли', '8 минут');


// const TRUTHY_VALUES = [true, 'true', 1];

// function getBoolean(value) {
//   'use strict';

//   if (typeof value === 'string') {
//     value = value.toLowerCase().trim();
//   }

//   return TRUTHY_VALUES.some(function(t) {
//     return t === value;
//   });
// }

// alert(getBoolean(false));   // false
// alert(getBoolean('false')); // false
// alert(getBoolean(1));       // true
// alert(getBoolean('true'));  // true


// const personValues = ['Магомед', 'Ахмед', 'Хусейн'];

// function getBoolean(value) {
//     return personValues.some(function(answer) {
//         return answer === value;
//     });
// }

// alert(getBoolean('Магомед'));
// alert(getBoolean('Гилани'));
// alert(getBoolean('Ахмед'));
// alert(getBoolean('Хусейн'));


// const goals = [8, 1, 1, 3, 2, -1, 5];

// let maxNumberOfGoals = goals[0];
// let maxNumberOfGoalsIndex = 0;

// let minNumberOfGoals = goals[0];

// goals.forEach((goalNumber, index) => {
//     if (goalNumber > maxNumberOfGoals) {
//         maxNumberOfGoals = goalNumber;
//         maxNumberOfGoalsIndex = index;
//     }
//     if (goalNumber < minNumberOfGoals && goalNumber >= 0) {
//         minNumberOfGoals = goalNumber;
//     }
// });

// const matchesWithMinNumberOfGoals = goals
//     .map((goalNumber, index) => goalNumber === minNumberOfGoals ? index + 1 : -1)
//     .filter((goalNumber) => goalNumber > 0)
//     .join(', ');

// alert(`Самый результативный матч был под номером ${maxNumberOfGoalsIndex + 1}. В нем было забито ${maxNumberOfGoals} гол(ов).`);
// alert(`Самые не результативные матчи были под номерами ${matchesWithMinNumberOfGoals}. В каждом из них было забито ${minNumberOfGoals} мяча(у).`);

// const numberOfGoalsPerSeason = goals.reduce((acc, goalNumber) => {
//     return goalNumber >= 0 ? acc + goalNumber : acc;
// }, 0);

// alert(`Общее количество голов за сезон равно ${numberOfGoalsPerSeason}`);

// const wereAutomaticLoses = goals.some((goalNumber) => goalNumber < 0);
// if (wereAutomaticLoses) {
//     alert('Были автоматические поражения: да');
// } else {
//     alert('Были автоматические поражения: нет');
// }

// const averageNumberOfGoalsPerMatch = numberOfGoalsPerSeason / goals.length;

// alert(`Среднее количество голов за матч равно ${averageNumberOfGoalsPerMatch}`);

// const ascendingOrderGoals = [...goals].sort((a, b) => a - b);

// alert(ascendingOrderGoals.join(', '));



// const possibleMathSigns = [">", ">", "<", "=", "+", "-", "*", "/"];
// const isNumber = (a) => !isNaN(a) && !isNaN(parseFloat(a));

// const getMathResult = (expression) => {
//     let resultExpression = [...expression];
//     if (expression.length > 3) {
//         resultExpression = resultExpression.filter(
//             (item) => isNumber(item) || possibleMathSigns.includes(item)
//         );
//     }
//     const firstDigit = Number(resultExpression[0]);
//     const secondDigit = Number(resultExpression[resultExpression.length - 1]);
//     const mathSign = resultExpression[1];
    
//     if (
//         resultExpression.length < 3 ||
//         expression.length < 3 ||
//         !isNumber(firstDigit) ||
//         !isNumber(secondDigit) ||
//         !possibleMathSigns.includes(mathSign)
//     ) {
//         return "Ошибка";
//     }

//     switch (mathSign) {
//         case ">":
//             return firstDigit > secondDigit;
//         case "<":
//             return firstDigit < secondDigit;
//         case "=":
//             return firstDigit === secondDigit;
//         case "+":
//             return firstDigit + secondDigit;
//         case "-":
//             return firstDigit - secondDigit;
//         case "*":
//             return firstDigit * secondDigit;
//         case "/":
//             return firstDigit / secondDigit;
//         default:
//             return "Ошибка";
//     }
// };

// const result = getMathResult(["100", "hello", "javascript", "help200", "+", 4]);
// console.log("result", result);



// let array = ['>', '<', '=', '+', '-', '*', '/'];
// const isNumber = (a) => !isNaN(a) && !isNaN(parseFloat(a));

// function getMathResult(expression) {
//     let resultExpression = expression;
//     if (expression.length > 3) {
//         resultExpression = resultExpression.filter(
//             (item) => isNumber(item) || array.includes(item)
//         );
//     }

//     const firstDigit = Number(resultExpression[0]);
//     const secondDigit = Number(resultExpression[resultExpression.length - 1]);
//     const mathSign = resultExpression[1];
        

//     switch (mathSign) {
//         case ">":
//             return firstDigit > secondDigit;
//         case "<":
//             return firstDigit < secondDigit;
//         case "=":
//             return firstDigit === secondDigit;
//         case "+":
//             return firstDigit + secondDigit;
//         case "-":
//             return firstDigit - secondDigit;
//         case "*":
//             return firstDigit * secondDigit;
//         case "/":
//             return firstDigit / secondDigit;
//         default:
//             return "Ошибка";
//     }
    
// };

// const result = getMathResult(['100', 'hello', 'javascript', 'help200', '+', 4]);
// console.log(result)


// const matrix = [];

// for (let i = 0; i < 3; i += 1) {
//     const row = [];
//     for (let j = 0; j < 5; j += 1) {
//         row.push(j + 1);
//     }
//     matrix.push(row);
// }

// console.log(matrix);


// const matrix = [];

// for (let i = 0; i < 3; i ++) {
//     const row = [];
//     for (let j = 0; j < 5; j ++) {
//         row.push(j + 1);
//     }
//     matrix.unshift(row);
// }

// console.log(matrix)

// const matrix = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ],
// ];

// const flatArray = matrix.reduce((acc, array) => {
//     return [...acc, ...array];
// }, []);

// console.log('flatArray', flatArray);


// const array = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ],
// ];

// const flatArray = array.reduce((acc, array) => {
//     return [...acc, ...array];
// });

// console.log('flatArray', flatArray);


// var step;
// for (step = 0; step < 5; step++) {
//   // Запускается 5 раз, с шагом от 0 до 4.
//   console.log('Идём 1 шаг на восток');
// }


// const getCallbackFunc = (callback) => {
//     const arr = [4, 5, 6];
//     const element = document.querySelector('.out');
//     callback(element, arr);
// }

// const callbackFunc = (elem, array) => {
//     elem.innerHTML += array.join(' ') + '<br>';
// }

// const callbackFunc2 = (elem, array) => {
//     elem.innerHTML += array.join('-');
// }

// getCallbackFunc(callbackFunc);
// getCallbackFunc(callbackFunc2);


// const arr = [1, 9, 3, 20, 10, 89, 10];
// const sortArr = arr.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     } 
//     // if (a < b) {
//     //     return -1;
//     // }
// });

// console.log(sortArr)


// var num1 = [1, 2, 3],
//     num2 = [4, 5, 6],
//     num3 = [7, 8, 9];

// var nums = num1.concat(num2, num3);

// console.log(nums)
// console.log(...num1, ...num2, ...num3); // Результат: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const arrName = ['Магомед'];
// const arrAge = [16];

// console.log(arrName.concat(arrAge))
// console.log(...arrName, ...arrAge)


// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));


// const arraySparse = [1,3,,7]
// let numCallbackRuns = 0

// arraySparse.forEach((element) => {
//   console.log(element)
//   numCallbackRuns++
// })

// console.log("numCallbackRuns: ", numCallbackRuns)

// 1
// 3
// 7
// numCallbackRuns: 3
// комментарий: как вы видите пропущенное значение между 3 и 7 не вызывало функцию callback.


// const personInfo = {
//     name: 'Магомед',
//     age: 16,
//     language: ['ru', 'en', 'ing'],
//     experience: 2,
// }

// const personInfo2 = {
//     name: 'Ali',
//     age: 19,
// }

// const objAssign = Object.assign(personInfo);
// console.log(objAssign)

// personInfo.experience = 2;

// delete personInfo.experience;

// console.log(personInfo.experience)


// let iterable = [10, 20, 30, 'ekqnw'];

// for (let value of iterable) {
//   value += 1;
//   console.log(value);
// }

// 11
// 21
// 31

// let iterable2 = [10, 20, 30];

// for (let value2 in iterable2) {
//   value2 += 1;
//   console.log(value2);
// }

// 01
// 11
// 21

// var arr = [3, 5, 7];
// arr.foo = "hello";

// for (var i in arr) {
//    console.log(i); // logs "0", "1", "2", "foo"
// }

// for (var i of arr) {
//    console.log(i); // logs "3", "5", "7"
//     //it is does not log "3", "5", "7","hello"
// }


// const startTime = Date.now();

// for (let i = 0; i < 100000000; i ++) {
    
// };

// const endTime = Date.now();

// console.log(startTime, endTime);
// console.log(endTime - startTime);


// const getPassport = Date.parse(peopleWithVisa.passportExpiration);
// console.log(getPassport);


// const peopleWithVisa = [
//     {
//        firstName: 'Stasia',
//        lastName: 'Ward',
//        criminalRecord: true,
//        passportExpiration: '19.06.2023',
//     },
//     {
//        firstName: 'Elliot',
//        lastName: 'Baker',
//        criminalRecord: false,
//        passportExpiration: '04.06.2021',
//     },
//     {
//        firstName: 'Leighann',
//        lastName: 'Scott',
//        criminalRecord: true,
//        passportExpiration: '31.07.2022',
//     },
//     {
//        firstName: 'Nick',
//        lastName: 'Pop',
//        criminalRecord: false,
//        passportExpiration: '31.12.2021',
//     },
//  ];


//  const newList = [];

//  for (const user of peopleWithVisa) {
//    if (String(user.criminalRecord).includes('false') === true) newList.push(user);
//  }

//  console.log(newList);


 
//  const date = new Date();
//  const getPeopleInfo = Object.values(peopleWithVisa === passportExpiration);
//  console.log(getPeopleInfo)
//  const newDate = String(date).replaceAll(' ', '.');
// //  const getNewDate = newDate
// console.log(newDate)

// const funcEach = peopleWithVisa.filter((item) => {
//     return item.passportExpiration > newDate;
// });

// console.log(funcEach);


// var days =["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

// // получим текущую дату
// var now = new Date();
// // выведем в консоль день недели
// console.log('Сегодня ' + days[now.getDay()]);

// var date1 = new Date('2015-04-02');
// alert(date1);


// const infoPerson = [
//    {
//       name: 'Магомед',
//       login: 'MagaUltra',
//       age: 16,
//       password: 'maga6666'
//    },
//    {
//       name: 'Ахмед',
//       login: 'KhTochiev',
//       age: 18,
//       password: 'khAhmed77'
//    },
//    {
//       name: 'Хусейн',
//       login: 'Xxxtentacion',
//       age: 20,
//       password: 'jusein778'

//    },
//    {
//       name: 'Аюп',
//       login: 'Ajub777',
//       age: 59,
//       password: 'ajub22'
//    },
// ];

// const arrList = [];

// for (const user of infoPerson) {
//    if (user.password.includes('m') === true) arrList.push(user);
// }

// console.log(arrList);

// let div = document.createElement("div")
// let p = document.createElement("p")
// div.append(p)

// console.log(div.childNodes)



// function stopDefAction(evt) {
//    evt.preventDefault();
// }

// document.getElementById('my-checkbox').addEventListener(
//    'click', stopDefAction, false
// );

// let user4 = {
//    name: "Джон",
//    go: function() { alert(this.name) }
//  };
 
//  (user4.go)();
 
//   let calculator = {
//     // ... ваш код ...
//     read() {
//        return {
//         num: prompt('a?'),
//         num2: prompt('b?')
//        }
//     },
//     sum() {
//         return {
//             sum: this.read + this.read
//         }
//     },
//     mul() {
//         return {
//             sum4: this.read 
//         }
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

// let ladder = {
//    step: 0,
//    up() {
//      this.step++;
//    },
//    down() {
//      this.step--;
//    },
//    showStep: function() { // показывает текущую ступеньку
//      alert( this.step );
//    }
//  };

//   ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1


// ladder
//  .up()
//  .up()
//  .down()
//  .up()
//  .down()
//  .showStep(); 
// ladder.up().up().down().showStep(); 


// const user = {
//    name: 'Maksim',
//    age: 14,
//    stack: ['HTML'],
//    level: 1,
//    improveLevel() {
//       this.level += 1;
//       if (this.level === 2) {
//          this.stack.push('CSS');
//       } 
//        else {
//          alert(`Пользователь по имени ${this.name} с возрастом в ${this.age} лет, выучил технологии ${this.stack} и повысил свой уровень до ${this.level} го`)
//          console.log(this)
//       }
//       return this;
//    }
// }

// user
//    .improveLevel()
//    .improveLevel()


// const infoPerson = {
//    name: 'SpiderMan',
//    health: 60,
//    strength: 15,
// };

// function getFullInfoPerson(extraInfo) {
//    console.log('this', this);
//    console.log(`Имя героя: ${this.name}, Здоровье: ${this.health}, Сила: ${this.strength}, ${extraInfo}`);
// }

// getFullInfoPerson.bind(infoPerson, 'Роль: Супер герой')()


// const dog = {
//    name: 'Чарли',
//    type: 'Собака',
//    makeSound() {
//        return 'Гав-Гав';
//    }
// };

// const bird = {
//    name: 'Петя',
//    type: 'Воробей',
//    makeSound() {
//        return 'Чик-чирик';
//    }
// }

// function makeDomestic(isDomestic) {
//    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
//    return {
//        ...this,
//        isDomestic,
//    }
// }

// makeDomestic.bind(dog, true)();
// makeDomestic.call(bird, false);
// makeDomestic.apply(bird, [true]);


// const collegeFirstYear = {
//   name: 'Мухаммад-Али',
//   age: 19,
//   well: 1,
// }

// function getInfoPerson(diploma) {
//   this.well += 1;
//   if (this.well === 2) {
//     alert(`Учашийся по имени: ${this.name} учится во ${this.well} курсе, и к своему ${this.age} летию, закончит все курсы колледжа`);
//   } else if (this.well === 3) {
//     alert(`Учашийся по имени: ${this.name} учится во ${this.well} курсе, и к своему ${this.age} летию, закончит все курсы колледжа`);
//   }
//   else {
//     alert(`Учашемуся по имени ${this.name} исполнилось ${this.age} лет и закончил колледж получив ${diploma}`);
//   }
// };
// getInfoPerson.call(collegeFirstYear, 'диплом')
// getInfoPerson.call(collegeFirstYear, 'диплом')
// getInfoPerson.call(collegeFirstYear, 'диплом');


// const person = {
//     name: 'Maksim',
//     age: 17,
//     yourName: 'Andreevski',
//     getAllInfo() {
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//         console.log(`Your name is ${this.yourName}`);
//     }
// }

// const lena = {
//     name: 'lena',
//     age: 5,
// }

// person.getAllInfo.call(lena);


// const person = {
//     name: 'Мухаммад-Али',
// };

// function info(phone, email) {
//     console.log(`Имя: ${this.name}, телефон: ${phone}, Email: ${email}`);
// }

// // Простой метод

// function bind(fn, context, ...rest) {
//     return fn.bind(context, ...rest);
// }

// bind(info, person, '+7(928) 923-23-44', 'm@mail.com')();
// bind(info, person, '+7(928) 923-23-44', 'm@mail.com')();
// bind(info, person, '+7(928) 923-23-44', 'm@mail.com')();


// function printNumbers2(from, to) {
//     let idFrom = from

//     let timeBreak = setInterval(function() {
//     console.log(idFrom);
//     if (idFrom === to) {
//         clearInterval(timeBreak);
//     }
//     idFrom ++;
//     }, 1000);
// }
// printNumbers2(1, 5)


// function printNumbers(from, to) {
//     let current = from;
  
//     let timerId = setInterval(function() {
//       console.log(current);
//       if (current == to) {
//         clearInterval(timerId);
//       }
//       current++;
//     }, 1000);
//   }
  
//   // использование:
//   printNumbers(1, 5);


// const arr = [
//     {name: 'majkr', age: 13},
//     {name: 'jhs', age: 13},
// ];

// const getArr = arr.findIndex((item => item.age === 13));
// console.log(getArr)


// const arr = ['doe4', 'doe3', 'dpe5']
// const getArr = arr.sort((a, b) => {
//     if (a < b) {
//         return -1;
//     }
// });
// console.log(getArr)


// const arr = ['Ваня', 'Саша', 'Оля'];

// arr.forEach(function(item, index, array) {
//     console.log(`${item} находится на позиции ${index} в ${array}`)
// });

// const arr2 = ['Ваня', 'Саша', 'Оля'];

// function show(item) {
//     console.log(item);
// }

// arr2.forEach(show);


// const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const reduceResult = arrNum.reduce((previousValue, item, index, array) => {
//     return item / previousValue;
// }, 1);

// console.log('Вывод:' , reduceResult)


// const arr2 = ['Ваня', 'Саша', 'Оля'];

// const result = arr2.reduce((previousValues, item) => {
//     return `${item}, ${previousValues}`
// });

// console.log(result)


// const arr3 = ['Ваня', 'Саша', 'Оля'];

// const result2 = arr3.reduceRight((previousValues, item) => {
//     return `${item}, ${previousValues}`
// });

// console.log(result2)

// const obj = {};
// const arr = [];

// console.log(typeof arr, typeof obj)
// console.log(obj === arr) // false

// if (Array.isArray(obj)) {
//     console.log('это Массив')
// } else {
//     console.log('это не Массив')
// }

// const qrr = ['Ваня', 'Иштван', 'Оля'];

// const getDeleteElem = qrr.splice(1, 1) 
// console.log(getDeleteElem)

// const arrString = 'nsfs, srwe, fwefw';

// const getArrNum = arrString.split();
// console.log(getArrNum)


// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//   }
  
//   let user = new User("Jack");
  
//   alert(user.name); // Jack
//   alert(user.isAdmin); // false

// function getResult(name, age) {
//    this.name = name;
//    this.gane = age;
// };

// const userName = new getResult('Maga', 12);

// console.log(userName.name);
// console.log(userName.gane);


// class User {
//     constructor(name) {
//         this.name = name;
//     };
// };

// const getNameUser = new User('Maga');

// console.log(getNameUser.);


// const person = new Object({
//     name: 'Maksim',
//     age: 15,
//     greet() {
//         console.log('greet');
//     },
// });

// Object.prototype.sayHello  = () => {
//     console.log('Hello');
// }

// const lena = Object.create(person);
// lena.name = 'Elena';

// const str = new String('I am string');



// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = 'Junior';
    
//     this.setTechnologies = function(technologies) {
//        this.technologies = [
//           ...this.technologies,
//           ...technologies,
//        ];
//     }
//     this.setNewStatus = function(newStatus) {
//        this.status = newStatus;
//     }
//  }
//  const student = new Student ('Maxim', 20);
//  student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]);
//  student.setNewStatus('Middle');
//  console.log(student);



// class Planets {
//     constructor(name, age) {
//         this.planetName = name;
//         this.planetAge = age;
//     };
// };

// const getResult = new Planets('Earth', '4 billion age');
// // console.log(getResult.planetName)

// function getUserAnswer(yea) {
//     const question = prompt('Назовите название нашей с вами планеты');
//     const answer = getResult.planetName;

//     yea(question, answer);
// }

// function getResultFunc(one, two) {
//     if (one === two) {
//         console.log('Правильно');
//     } else {
//         console.log('Неправильно');
//     };
// };

// getUserAnswer(getResultFunc)



// class Animal {
//     constructor(options) {
//         this.name = options.name;
//         this.age = options.age;
//         this.hasTail = options.hasTail;
//     };
// };


// const animal = new Animal({
//     name: 'Maksim',
//     age: 5,
//     hasTail: true,
// // });

// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = 'Junior';
    
//     this.setTechnologies = function(technologies) {
//        this.technologies = [
//           ...this.technologies,
//           ...technologies,
//        ];
//     }
//     this.setNewStatus = function(newStatus) {
//        this.status = newStatus;
//     }
//  }
//  const student = new Student ('Maxim', 20);
//  student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]);
//  student.setNewStatus('Middle');
//  console.log(student);


//  class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.technologies = [];
//         this.status = 'Junior';

//         this.setTechnologies = function(technologies) {
//             this.technologies = [
//                 ...this.technologies,
//                 ...technologies,
//             ];
//         };
//         this.setNewStatus = function(newStatus) {
//             this.status = newStatus;
//         };
//     };
//  };

//  const student2 = new Student('Maxim', 20);
//  student2.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]);
//  student2.setNewStatus('Middle');
// //  console.log(student2);

// function getInfoPerson(infoData, trueData) {
//     const getInfo = prompt(infoData);

//     if (getInfo === trueData) {
//         alert('Введенные данные совпадают');
//     } else {
//         const expitation = setTimeout(() => {
//             alert('Ответ не правильный')
//         }, 2000);
//     }
    
// };

// getInfoPerson('Введите ваш уровень профессиональности', student2.status);



// class InfoPerson {
//     constructor(options) {
//         this.whatIsYourName = options.whatIsYourName;
//         this.name = options.name;
//         this.age = options.age;
//         this.howDoesHeAnnoyYou = options.howDoesHeAnnoyYou;
//         this.howMuchDoYouLoveHim = options.howMuchDoYouLoveHim;
//         this.whoIsHeInLife = options.whoIsHeInLife;
//         this.wouldWeNowAge = options.wouldWeNowAge;
//         this.whatYouWeAge = options.whatYouWeAge;
//         this.whatYouUppend = options.whatYouUppend;
//     };
// };

// const propertyValues = new InfoPerson({
//     whatIsYourName: prompt('Ваше имя - Забура, Залина, Мехти'),
//     name: prompt('Введите имя персонажа - Забура, Залина, Мехти, Мухаммад-Али'),
//     age: prompt('Кого вы ненавидите? - Забура, Залина, Мехти, Мухаммад-Али'),
//     howDoesHeAnnoyYou: prompt('как вы его охарактеризуете? - Добрый человек, сапожник, Дебил'),
//     howMuchDoYouLoveHim: prompt('Как сильно вы его любите? - Очень, Нимножко, Нисколько '),
//     whoIsHeInLife: prompt('Кем он(она) является по жизни? - Хороший, Нисносный, Имбецил'),
//     wouldWeNowAge: prompt('Кого вы сегодня ненавидите?'),
//     whatYouWeAge: prompt('За что вы его ненавидите?'),
//     whatYouUppend: prompt('Что вы в нем ненавидите?')
// });

// if (propertyValues) {
//     alert('Вы ответили на все вопросы!');
//     alert(`${propertyValues.whatIsYourName}, вы любите ${propertyValues.name} - ${propertyValues.howMuchDoYouLoveHim}, вы считаете его - ${propertyValues.whoIsHeInLife} и вы его охарактеризовали как - ${propertyValues.howDoesHeAnnoyYou}. Вы сегодня ненавидите ${propertyValues.wouldWeNowAge}, вы ненавидите его за то что ${propertyValues.whatYouWeAge}, вы ненавидите в нем ${propertyValues.whatYouUppend}`);
// } else {
//     alert('Ва кхуехь, нийс отвечать сан дец 1а?');
// }

// alert(`Мои слова вам: Я вас поздравляю. Вы прошли тест и хотел бы произнести вам свою речь: ${propertyValues.whatIsYourName}, желаю вам всего самого лучшего, чтоб вы стали нимного вдумчивее и умнее. Ваш любимый Мухаммад Али`);



// class Calculator {
//     constructor(options) {
//         this.name = options.name;
//         this.age = options.age;

//         this.name2 = options.name2;
//         this.age2 = options.age2;
//     };

//     result() {
//         if (this.age > this.age2) {
//             alert(`${this.name} старше чем ${this.name2}`);
//         } else {
//             alert(`${this.name} младше чем ${this.name2}`);
//         };
//     };
// };

// const calculator = new Calculator({
//     name: prompt('Введите ваше имя'),
//     age: +prompt('Введите ваш возраст'),
//     name2: prompt('Введите ваше имя'),
//     age2: +prompt('Введите ваш возраст'),
// });

// calculator.result();


// class Dictionary {
//     constructor(name) {
//         this.name = name;
//         this.words = {};
//     };

//     add(word, description) {
//         if (!this.words[word]) {
//             this.words[word] = {
//                 word,
//                 description,
//             };
//         };
//     };

//     remove(word) {
//         delete this.words[word];
//     };

//     get(word) {
//         return this.words[word];
//     };

//     showAllWords() {
//         Object.values(this.words).forEach((element) => {
//             console.log(`${element.word} - ${element.description}`);
//         });
//     };
// };

// const dictionary = new Dictionary('Толковый словарь');
// dictionary.add('JavaScript', 'популярный язык программирования');
// dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');

// dictionary.remove('JavaScript');
// dictionary.showAllWords();


// class SearchText {
//     constructor(wordName) {
//         this.wordName = wordName;

//         this.words = {};
//     }

//     add(word) {
//         if (!this.words[word]) {
//             this.words[word] = {
//                 word,
//             };
//         };
//     }

//     showAllWords() {
//             Object.values(this.words).map((element => {
//             console.log(`То, что вы искали, оказывается сушествует: ${element.wordName}`);
//         }));
//     }
// }

// const searchText = new SearchText({
//     wordName: prompt('Введите название технологии:'),
// });

// function getInfoWords(word, errorSymbol, getValues) {
//     if (word === errorSymbol) {
//         return getValues;
//     } else {
//         console.log('Такой технологии не существует!');
//     };
// }

// getInfoWords(searchText.wordName, 'JavaScript', searchText.showAllWords());


// class JuniorDeveloper {
//     #salary;

//     constructor(options) {
//         this.name = options.name;
//         this.programmingLanguage = options.programmingLanguage;
//         this.#salary = 0;
//     }

//     get devSalary() {
//         return this.#salary;
//     }

//     set setSalary(upSalary) {
//         this.#salary = upSalary;
//     }

//     startInfoPerson() {
//         if (this.name && this.programmingLanguage) {
//             console.log(`Программист по имени: ${this.name}, знает технологию: ${this.programmingLanguage}, и его зарплата повысилась до ${this.#endUserSalary()}$`);
//             console.log(this.#endUserSalary())
//         } else {
//             console.log('Данная строка не была заполненной!')
//         }
//     }

//     #endUserSalary() {
//         return this.setSalary = 3000;
//     }
// }

// const juniorDeveloper = new JuniorDeveloper({
//     name: prompt('Ваше имя'),
//     programmingLanguage: prompt('Введите название технологии с которым вы умеете работать(только один)'),
// });

// juniorDeveloper.startInfoPerson();



// class Dictionary {
//     #name;
//     #words;

//     constructor(name) {
//         this.#name = name;
//         this.#words = {};
//     }

//     get mainName() {
//         return this.#name;
//     }

//     set setMainName(newName) {
//         this.#name = newName;
//     }

//     get allWords() {
//         return this.#words;
//     }

//     addNewWord(word, description) {
//         this.allWords[word] = {
//             word,
//             description,
//         }
//     }

//      add(word) {
//         if (!this.#words[word]) {
//             this.#words[word].addNewWord();
//         }
//     }

//     remove(word) {
//         delete this.#words[word];
//     }

//     get(word) {
//         return this.#words[word];
//     }

//     showAllWords() {
//         Object.values(this.#words).forEach((wordItem) => {
//             console.log(`${wordItem.word} - ${wordItem.description}`);
//         });
//     }
// }

// class HardWordsDictionary extends Dictionary {
//     constructor(name) {
//         super(name);
//     }
// }

// const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
    
// hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
    
// hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
    
// hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
    
// hardWordsDictionary.remove('неологизм');
    
// hardWordsDictionary.showAllWords();
    
// console.log(hardWordsDictionary.mainName); // Сложные слова
// hardWordsDictionary.setMainName = 'Новый Словарь';
// console.log(hardWordsDictionary.mainName); // Новый Словарь
// console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова 
// // дилетант и квант



// class CarService {
//     static DefaultWorkingHours = {
//         from: '9:00', 	
//         till: '20:00',
//     }

//     constructor(name, workingHours) {
//         this.name = name;
//         this.workingHours = workingHours[{from}], workingHours[{till}]
//     }
// }
// const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' });
// console.log(carService);

// let name = '';
// let randomNumber = Math.floor(Math.random());


let name = '';
let numberRandom = Math.floor(Math.random() * 100);
let guesses = 0;

console.log('Рандомное число: ', numberRandom)

const output = document.querySelector('ul');
const prompt = document.querySelector('form');
const input = document.querySelector('form input');

prompt.addEventListener('submit', handleSubmit);

input.focus();

printMessage('Введите имя игрока:');

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

    if (guess > numberRandom) {
        printMessage('Много! Берите меньше.');
    } else if (guess < numberRandom) {
        printMessage('Мало! Берите больше.');
    } else {
        printMessage('Верно! Вы нашли паразита!.');
        printMessage(`Кол-во попыток: ${guesses}`);
        printMessage('GAME OVER');

        prompt.remove();
    }
}

