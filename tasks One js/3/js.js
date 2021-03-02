
console.log(findVowels('hello'));
console.log(findVowels('why'));


// function findVowels(str) {
//     let count = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u']

//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             count += 1
//         }
//     }

//     return count
// }

function findVowels(str) {
    const matched = str.match(/[aeiou]/gi)  // [] регулярное выражение/ глобальный поиск 
    return matched ? matched.lenght : 0
}