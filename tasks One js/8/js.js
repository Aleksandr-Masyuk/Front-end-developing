//for (let i = 0; i < 5; i++) console.log( i );

// вывод четных чисел
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }

// }

// замена for на while
// for (let i = 0; i < 3; i++) {
//   console.log(`number ${i}!`);
// }

// let i = 0;
// while (i < 3) {
//   console.log(`number ${i}!`);
//   i++;
// }


// проверка введенного числа, больше 100

// let btn = document.querySelector('.btn')
// let out = document.querySelector('.out')

// btn.onclick = () => {
//     let inp = document.querySelector('.inp').value
//     console.log(inp);
//     if (inp < 100) {
//         out.textContent = 'ваше число меньше 100'
//     } else out.textContent = 'все верно'
// }

// let num;

// do {
//   num = prompt("Введите число, большее 100?", 0);
// } while (num <= 100 && num);


// вывести простые числа

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   console.log(i); // простое число
// }

let result = 1
let arr = [2,3,4,5]

for (let i = 0; i < arr.length; i++) {
    result = result * arr[i]
}
console.log(result);