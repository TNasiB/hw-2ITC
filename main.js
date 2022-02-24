// Задача 1
console.log("Задача №1")
// let arr = [2, 3, 4, 5, 10, 12, 23, 3]
// let summ = 0

// arr.forEach(number => number % 2 == 0 ? )

// Задача 2
console.log("Задача №2")
const appleCost = 1.15,
      orangeCost = 2.30
console.log(`По мнению JavaScript, яблоко и апельсин вместе стоят ${appleCost + orangeCost}`)

// Задача 3
console.log("Задача №3")
let star = ""
for (let i = 0; i < 7; i++) {
    star += "*"
    console.log(star)
}

// Задача 4
console.log("Задача 4")
let numberTask4 = 1
// while(numberTask4 <= 100) {
//     if (numberTask4 % 3 == 0) {
//         console.log("Fizz")
//         numberTask4++
//     } else if ((numberTask4 % 3 != 0) && (numberTask4 % 5 == 0)) {
//         console.log("Buzz")
//         numberTask4++
//     } else {
//         console.log(numberTask4)
//         numberTask4++
//     }
// }
while(numberTask4 <= 100) {
    if ((numberTask4 % 3 == 0) && (numberTask4 % 5 == 0)) {
        console.log("FizzBuzz")
        numberTask4++
    } else {
        console.log(numberTask4)
        numberTask4++
    }
}

// Задача 5
console.log("Задача 5")
const secondsInMinutes = 60,
      minutesInHour = 60
console.log(`В часе ${secondsInMinutes*minutesInHour} секунд`)

// Задача 6
// console.log("Задача 6")
// let nameOfUser = prompt("Как вас зовут?")
// alert(`Ваше имя - ${nameOfUser}`)

// Задача 7
console.log("Задача 7")