// Задача 1 -------------------------------------------------
console.log("Задача №1")
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
console.log(numbers.filter(element => !(element % 2)).reduceRight((sum, element) => sum + Math.sqrt(element), 0)
);

// Задача 2 -------------------------------------------------
console.log("Задача №2")
const appleCost = 1.15,
      orangeCost = 2.30
console.log(`По мнению JavaScript, яблоко и апельсин вместе стоят ${appleCost + orangeCost}`)

// Задача 3 -------------------------------------------------
console.log("Задача №3")
let star = ""
for (let i = 0; i < 7; i++) {
    star += "*"
    console.log(star)
}

// Задача 4 -------------------------------------------------
console.log("Задача 4")
let numberTask4 = 1
while(numberTask4 <= 100) {
    if (numberTask4 % 3 == 0) {
        console.log("Fizz")
        numberTask4++
    } else if ((numberTask4 % 3 != 0) && (numberTask4 % 5 == 0)) {
        console.log("Buzz")
        numberTask4++
    } else {
        console.log(numberTask4)
        numberTask4++
    }
}
while(numberTask4 <= 100) {
    if ((numberTask4 % 3 == 0) && (numberTask4 % 5 == 0)) {
        console.log("FizzBuzz")
        numberTask4++
    } else {
        console.log(numberTask4)
        numberTask4++
    }
}

// Задача 5 -------------------------------------------------
console.log("Задача 5")
const secondsInMinutes = 60,
      minutesInHour = 60
console.log(`В часе ${secondsInMinutes*minutesInHour} секунд`)

// Задача 6 -------------------------------------------------
console.log("Задача 6")
let nameOfUser = prompt("Как вас зовут?")
alert(`Ваше имя - ${nameOfUser}`)

// Задача 7 -------------------------------------------------
console.log("Задача 7")
let str = "abcde"
console.log(`${str[0]} ${str[2]} ${str[4]}`)

// Задача 8 -------------------------------------------------
console.log("Задача 8")
const humans = {
    "Коля": "1000",
    "Вася": "500",
    "Петя": "200",
}
console.log(`
    Зарплата Пети: ${humans["Петя"]}\n
    Зарплата Коли: ${humans["Коля"]}
`)

// Задача 9 -------------------------------------------------
console.log("Задача 9")
let arrForTask9 = [2, 5, 3, 9]
let resultForTask9 = arrForTask9[0] * arrForTask9[1] + arrForTask9[2] * arrForTask9[3]
console.log(resultForTask9)

// Задача 10 -------------------------------------------------
console.log("Задача 10")
let arrForTask10 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
for (let i = 0; i < arrForTask10.length; i++) {
    for (let j = 0; j < arrForTask10.length; j++) {
        if (arrForTask10[i][j] == 4) {
            console.log(arrForTask10[i][j])
        }
    }
}
// Задача 11 -------------------------------------------------
console.log("Задача 11")
numberForTask11 = prompt("Введите число от 0 до 59")
if (numberForTask11 < 15) {
    console.log("1 четверть")
} else if (numberForTask11 < 30) {
    console.log("2 четветь")
} else if (numberForTask11 < 45) {
    console.log("3 четверть")
} else {
    console.log("4 четверть")
}

// Задача 12 -------------------------------------------------
console.log("Задача 12")
let numberForTask12 = prompt("№12 Введите число")
numberForTask12 < 0 ? console.log("Верно") : console.log("Неверно")

// Задача 13 -------------------------------------------------
console.log("Задача 13")
let questionForTask13 = confirm("Укажите булевое значение(ok - true) (cancel - false)")
questionForTask13 == true ? console.log("Верно") : console.log("Неверно")

if (questionForTask13 == true) {
    console.log("Верно")
} else {
    console.log("Неверно")
}

// Задача 14 -------------------------------------------------
console.log("Задача 14")
numberForTask14 = prompt("Введите число от 1 до 4")
let result
switch(numberForTask14) {
    case "1" :
        result = "Зима"
        break
    case "2" : 
        result = "Весна" 
        break
    case "3" : 
        result = "Лето"
        break 
    case "4" : 
        result = "Осень"
        break
    default: 
        result = "Вы указали число, которое не входит в диапазон от 1 до 4"
}
console.log(result)

// Задача 15 -------------------------------------------------
console.log("Задача 15")
arrForTask15 = [1, 2, 3, 4, 5].forEach(item => console.log(item))

// Задача 16 -------------------------------------------------
console.log("Задача 16")
a16 = 10
b16 = 3
console.log(a16 % b16)

// Задача 17 -------------------------------------------------
console.log("Задача 17")
st = Math.pow(2, 10)
console.log(st)

// Задача 18 -------------------------------------------------
console.log("Задача 18")
console.log(Math.sqrt(379))
console.log(Math.sqrt(379).toFixed(0))
console.log(Math.sqrt(379).toFixed(1))
console.log(Math.sqrt(379).toFixed(2))

// Задача 19 -------------------------------------------------
console.log("Задача 19")
const arrForTask19 = [4, -2, 5, 19, -130, 0, 10]
let min = arrForTask19[0],
    max = arrForTask19[0]
for (let i = 0; i < arrForTask19.length; i++) {
    if (arrForTask19[i] < min) min = arrForTask19[i]
    if (arrForTask19[i] > max) max = arrForTask19[i]
}
console.log(max)
console.log(min)

// Задача 20 -------------------------------------------------
console.log("Задача 20")
console.log((Math.random() * 100).toFixed(0))

// Задача 21 -------------------------------------------------
console.log("Задача 21")
let strForTask22 = "aaa bbb ccc"
console.log(strForTask22.substr(4,3))
console.log(strForTask22.substring(4,7))
console.log(strForTask22.slice(4,7))

// Задача 22 -------------------------------------------------
console.log("Задача 22")
const js = "js"
console.log(js.toUpperCase())

// Задача 23 -------------------------------------------------
console.log("Задача 23")
const learnJs = 'я учу javascript!'
console.log(learnJs.length)

// Задача 24 -------------------------------------------------
console.log("Задача 24")
let learnJsStr = 'я учу javascript!'
for (let i = 0; i < learnJs.length; i++) {
    if ((learnJsStr[i] == "у") &&
       (learnJsStr[i+1] == "ч") && 
       (learnJsStr[i+2] == "у") && 
       (learnJsStr[i+3] == " "))
    {
        console.log(`Слово начинается с ${i+1} символа`)
    }
}

// Задача 25 -------------------------------------------------
console.log("Задача 25")
let strForTask25 = 'Я-учу-javascript!'
let newStr = '';
for (let i = 0; i < strForTask25.length; i++) {
    strForTask25[i] === '-' ? newStr += '!' : newStr += strForTask25[i];
}
console.log(newStr);

// Задача 26 -------------------------------------------------
console.log("Задача 26")
let strForTask26 = 'я учу javascript!';
console.log(strForTask26.split(''))

// Задача 27 -------------------------------------------------
console.log("Задача 27")
let arrForTask27 = ['я', 'учу', 'javascript','!'];
console.log(arrForTask27.join('+'));

// Задача 28 -------------------------------------------------
console.log("Задача 28")
let strForTask28 = 'javascript';
let newStr28 = strForTask28[0].toUpperCase() + strForTask28.slice(1);
console.log(newStr28);