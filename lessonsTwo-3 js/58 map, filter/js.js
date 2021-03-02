// let a = [4, 5, 12, 200, 1, 0, -2]

// let b = a.map(function (item, index) {
//     //console.log(item);
//     //console.log(index);
//     return item*5; //возвращаю значение в b
// })
// //console.log(b);



// let c = a.filter(function(item, index) {
//     if (item % 2 == 0 ) //возврат четных чисел
//     return true;
//     else {
//         return false;
//     }
// })

// console.log(c);


let a = [4,"5",6,7,12,"43",56,78,"hello",90,"11"];

let b1 = document.querySelector(".b1");

// b1.onclick = () => {
//     let c = a.map(function(item) {
//         return item * 2;
//     })
//     console.log(c);
// }

    let x = a.map(function(item) {
        return parseFloat(item);
    }).filter(i => !isNaN(i));
    console.log(x);
