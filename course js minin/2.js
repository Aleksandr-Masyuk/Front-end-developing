// числа Number

// const integer = 42
// const float = 42.1
// const pow = 10e3 //= 10000
// console.log(pow)

// console.log(Number.isNaN(42)) //проверка, является ли згачение числом

// const stringInt = '40'
// console.log(Number.parseInt(stringInt) + 2) //преобразование строки в число. РАБОТАТЕ С ЦЕЛЫМИ ЧИСЛАМИ integer
// //аналогично
// console.log(parseInt(stringInt) + 2) //РАБОТАТЕ С ЦЕЛЫМИ ЧИСЛАМИ integer
// console.log(Number(stringInt) + 2)
// console.log(+parseInt(stringInt) + 2)

// //для работы с десятичными float
// const stringFloat = 40
// console.log(parseFloat(stringFloat) + 2)
// console.log(+stringFloat + 2)

// console.log(0.4 + 0.2) //0.6000000000000001
// console.log(+((0.4 + 0.2).toFixed(1))) //какое количесво знаков после запятой нужно сохранить

// BigInt

// console.log(Number.MAX_SAFE_INTEGER) //максимально возможное число
// console.log(900719925474099199999999999n - 9007199254740991999999999n)
// console.log(900719925474099199999999999.342) //ошибка, только целые числа
// console.log(10n - BigInt(4))


// Math
// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.sqrt(25)) //квадратный корень
// console.log(Math.pow(5, 3)) //степень
// console.log((Math.abs(-42))) //дает модуль, 42
// console.log(Math.max(32, 11, 56, 97)) //опрд макс число
// console.log(Math.min(32, 11, 56, 97)) //опрд мин число
// console.log(Math.floor(3.56)) //округление в меньшую сторону
// console.log(Math.ceil(3.56)) //округление в большую сторону
// console.log(Math.round(3.56)) //к ближайшему целому
// console.log(Math.trunc(3.56)) //убирает дробь
// console.log(Math.random(3.56)) //рандом

// function random (min, max) {
//     return Math.floor (Math.random() * (max - min + 1) + min)
// }
// console.log(random(3, 10))


// Строки

// const name = 'Александр'
// const age = 25

// const out = 'меня зовут ' + name + ' и мне ' + age + ' лет' 
//console.log(out)

//аналог
// function getAge() {
//     return age
// }
// const out = `меня зовут ${name} мой возраст ${getAge()} лет`
// console.log(out)

// const out = `меня зовут ${name} мой возраст ${getAge() < 20 ? 'a' : 'b'} лет`
// // ${getAge() < 20 ? 'a' : 'b'} если меньше 20 то 'а' в противном случае 'b'(это тернарное выражение)
// console.log(out)

// const out = `
// <div>this id div</div>
// <p>this is p</p>
// `
// console.log(out)

// const name = 'Александр'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('екс'))
// console.log(name.startsWith('Ал'))
// console.log(name.endsWith('ндр'))
// console.log(name.repeat(3))
// const string = '        password             '
// console.log(string.trim()) //убирает пробелы
// console.log(string.trimLeft())
// console.log(string.trimRight())


// function person(s, name, age) {
//     if (age <= 0) {
//         age = 'не родился'
//     }
//     return `${s[0]}${name}${s[1]}${age}${s[2]}`
// }

// const personName = 'Александр'
// const personAge = 0

// const output = person `Имя: ${personName}, Возраст: ${personAge}!`

// console.log(output)
