// функции

//function declaration
// function greet(name) {
//     console.log('привет ', name)
// }
// greet('елена')


// //function expression
// const greet2 = function greet2(name) {
//  console.log('привет ', name)
// }
// greet2('светлана')


// //console.dir(greet)


// //анонимные функции
// let counter = 0
// const interval =  setInterval( function() {
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 1000)


//стрелочные функции

// const arrow = (name) => {
//     console.log('привет', name)
// }

// const arrow = name => console.log('привет', name)

// arrow('елена')

// // const pow = num => {
// //     return num ** 2
// // }

// const pow = num => num ** 2

// console.log(pow(5))


//параметры по умолчанию

// const sum = (a, b = a * 3) => a + b  // b по умолчанию b = a * 3

// console.log(sum(12, 2)

// function sumAll(...all) { // ...all(рест) принимает не ограниченное количество параметров(чисел)
//     console.log(all)
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }

// const res = sumAll(1, 2, 3, 4, 5, 6, 7, 8)
// console.log(res)


//замыкание

function creat(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logLastName = creat('Aleksandr ')
console.log(logLastName)
console.log(logLastName('masyuk'))