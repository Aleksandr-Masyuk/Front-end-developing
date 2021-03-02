// function isPrimer(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return num > 1
// }
// isPrimer()

// console.log('1', isPrimer(1));
// console.log('2', isPrimer(2));
// console.log('3', isPrimer(3));
// console.log('4', isPrimer(4));
// console.log('5', isPrimer(5));
// console.log('6', isPrimer(6));
// console.log('7', isPrimer(7));
// console.log('8', isPrimer(8));
// console.log('9', isPrimer(9));
// console.log('10', isPrimer(10));
// console.log('11', isPrimer(11));

// // вывод простых чисел

// function getPrimes(num) {
//     const primes = []
//      for (let i = 2; i <= num; i++) {
//          if (isPrimer(i)) {
//              primes.push(i)
//          }
//      }
//      return primes
// }

// console.log(getPrimes(120));

// аналог (решето Эротрофера)

function getPrimes(num) {
  const seive = [];
  const primes = [];

  for (let i = 2; i <= num; i++) {
    if (!seive[i]) {
      primes.push(i);
      for (let j = i * 2; j <= num; j += i) {
        seive[j] = true;
      }
    }
  }
  return primes;
}

console.log(getPrimes(120));
