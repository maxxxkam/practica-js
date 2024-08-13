// let name = prompt('Как тебя зовут?')
// let age = +prompt('сколько тебе лет?')
// let city = prompt('где ты живешь?')



// alert('Привет, ' + name + ' тебе ' + age + ' лет, ' + 'Ты живешь в городе ' + city)


// let num1 = +prompt('Введите первое число')
// let num2 = +prompt('Введите второе число')

// if (num1 > num2) {
//     alert('первое число больше')
// } else if (num1 < num2) {
//     alert('второе число больше')
// } else  {
//     alert('они ровны')
// }

// let number = Math.floor(Math.random() * 11)
// let guess = +prompt('угадай число от 1 до 10')

// if (guess == number) {
//     alert('угадал)')
// } else if(guess == 52) {
//     alert('да здравтсвует санкт-питербург')
// }
// else {
//     alert('не угадал(')
// } 

// let num = +prompt ('введите число')
// if (num % 2 == 0) {
//     alert('четное')
// } else {
//     alert('это нечетное')
// }

// let a = +prompt ('введите число')
// let b = +prompt('еще одно')

// let multiply = (a,b) => {
//     alert(a * b)
// }
// multiply(a,b)

// let user = {
//     name: prompt('Как тебя зовут?'),
//     age: +prompt('Сколько тебе лет?')
// }

// console.log(user);

// let list = []
// for(let i = 1; i < 11; i++) {
//     console.log(i);
   
// }

let num1 = +prompt('введите первое число')
let num2 = +prompt('введите второе  число')
let num3 = +prompt('введите третье число')

let max = num1

if (num2 > max) {
    max = num2
}
if (num2 > max) {
    max = num3 
}

alert('Максимальное число: ' + max)












// if (num1 > num2) {
//     alert('это самое большое число')
// } else if (num1 > num3) {
//     alert('это самое большое число')
// } else if (num2 > num1) {
//     alert('это самое большое число')
// } else if (num2 > num3) {
//     alert('это самое большое число')
// } else if (num3 > num1) {
//     alert('это самое большое число')
// } else if (num3 > num2) {
//     alert('это самое большое число')
// }