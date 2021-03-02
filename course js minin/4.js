// массивы

const cars = ['мазда', 'форд', 'бмв', 'мерседес']
const fib = [1, 1, 2, 3, 5, 8, 13]
// cars.push('рено') //дабавили в конец массива
// const first = cars.pop() //удаляем последний элемент и возвращаем его
// console.log(first)

// cars.unshift('вольва') //в начало массива
// const item = cars.shift() //удалили первый элемент и возвращает его
// console.log(item)

// console.log(cars)


// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('бмв')
// cars[index] = 'porsche'
// console.log(cars[index])



//задача
// const text = 'привет, мы узучаем js'
// const reverse = text.split(' ').reverse().join(' ')   //split возвращает массив/ join возвращает строку
// console.log(reverse)

// const people = [
//     {name: 'aleksandr', budget: 4200},
//     {name: 'elena', budget: 3500},
//     {name: 'victoria', budget: 1700},
// ]

// const index = people.findIndex( function(person) {  // findIndex возвращает индекс
//     return person.budget === 3500
// })
// console.log(people[index])

// const person = people.find( function(person) { find возвращает элемент
//     return person.budget === 3500
// })

//аналог
// const person = people.find(person => person.budget === 3500)

// console.log(person)

// let findedPerson
// for (const person of people) {
//     if (person.budget === 3500) {
//         findedPerson = person
//     }
// }
// console.log(findedPerson)

//console.log(cars.includes('мазда')) //проверка наличия значения

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
// console.log(upperCaseCars)


// const powFib = fib.map(num => num ** 2)
// console.log(powFib)

// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)  //передали функцию

// const pow3 = num => num ** 2
// const pow3Fib = fib.map(pow3)
// const filter = pow3Fib.filter(num => {
//     return num > 20
// })
// console.log(filter)


// const people = [
//     {name: 'aleksandr', budget: 4200},
//     {name: 'elena', budget: 3500},
//     {name: 'victoria', budget: 1700},
// ]

// const allBudget = people
// .filter(person => person.budget > 2000) 
// .reduce(function(acc, person) {
//     acc += person.budget
//     return acc
// }, 0)
// console.log(allBudget);