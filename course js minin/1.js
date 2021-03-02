// мутирование
// const firstName = 'aleksandr'
// const lastName =  prompt('введите')
// console.log(lastName + ' ' + firstName)


// операторы

// const currentYear = 2020
// const birthYear = 1995
// const age = currentYear - birthYear
// console.log(age)

// let a = 10
// let c = 15
// //c = a + c
// c += a //идентичны
// c -= a
// c /= a


// типы данных

// const isProgrammer = true
// const name = 'aleksandr'
// const age = 24
// let x
// console.log(typeof isProgrammer) // определить тип даннных
// console.log(typeof name) // определить тип даннных
// console.log(typeof age) // определить тип даннных
// console.log(typeof x) // определить тип даннных

// // вывело примитивы (примитивные типы)
// boolean
// string
// number
// undefined
// null


// приоритет операторов

// const fullAge = 24
// const birrthYear = 1995
// const currentYear = 2020

// const isFullAge = currentYear - birrthYear >= fullAge
// console.log(isFullAge)


// условные операторы

// const courseStatus = 'pending'

// if (courseStatus === 'ready') {
//     console.log('курс готов')
// }
// // if (courseStatus === 'pending') {
// //     console.log('в разработке')
// // }
// else {
//     console.log('в разработке')
// }

// const isReady = false
// if (isReady) {
//     console.log('готово')
// } else {
//     console.log('не готово')
// }
// // аналогичо, тернарное выражение
// isReady ? console.log('готово') : console.log('не готово')


// булевая логика

// true && true //= true
// true && false //= false
// false && true //= false

// true || true //= true
// true || false //= true
// false || true //= true

// !true //= false
// !!true //= true


// функции 

// function calculateAge(year) {
//     return 2020 - year
// }

// //let myAge = calculateAge(1995)
// // console.log(myAge)
// //аналог
// //console.log(calculateAge(1995))

// function logInfoAbout (name, year) {
//     const age = calculateAge(year)
//     if (age > 0) {
//         console.log('человек по имени ' + name + ' в возрасте ' + age)
//     } else {
//         console.log('это будущее')
//     }
// }

// logInfoAbout('александр', 1995)


// массивы

// const cars = ['мазда', 'мерседес', 'форд']
// //аналог
// //const cars = new Array ['мазда', 'мерседес', 'форд']
// console.log(cars)
// console.log(cars[2])
// console.log(cars.length)

// cars[0] = 'seat'

// cars[4] = 'opel'

// cars[cars.length] = 'honda' //положить в конец массива


// циклы

//const cars = ['мазда', 'мерседес', 'форд']

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i])
// }

//аналог
// for (let car of cars) {
//     console.log(car)
// }


// обьекты

// const person = {
//     firstName: 'Aleksandr',
//     lastName: 'Masyuk',
//     year: 1995,
//     languages: ['ru', 'en', 'de'],
//     greet: function() {
//         console.log('greet one')
//     }
// }

// console.log(person.languages)
// console.log(person['lastName'])
// const key = 'year'
// console.log(person[key])
// person.greet()

// //изменение, добавление ключей
// person.hasWife = true
// person.isProgrammer = 'this'
// delete person.year
// console.log(person)