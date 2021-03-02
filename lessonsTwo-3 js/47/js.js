// let f1 = document.querySelector(".f1");


// function one() {
//     console.log("work")
// }

// //f1.onclick = one;



// function two() {
//     console.log("work2");
//     return 54;
// }

// two();
// console.log(1 + two()); // нужен ретерн, возвращает функцию


// let a = 8;
// let b = 9;

// function multi() {
//     console.log(a * b);
//     return a * b;
// }

// multi();

// let c1 = multi(); // ретерн
// let c2 = 2 * multi();
// console.log(c1, c2);

// function multi2(x, y, z) { // х у парметры функции
//     return x * y + z;
// }

// console.log(multi2(4, 5, 5));
// console.log(multi2(2, 3, a))


// function multi3(x = 4, y = 5) {
//     return x * y;
//     // после ретерн ничего не выполняется
// }

// console.log(multi3());


// f1.onclick = function() {  //анонимная функция, для вызова один раз
//     console.log("rgd");
// }

// f1.onclick = () => {    //стрелочная функция, аналог анонимной
//     console.log("west");
// }

// document.querySelector(".f2").onclick = () => {
//     console.log("++++++");
// }

// function (x, y) {
//     return 7 * 9;
// }

//сокращение

(x, y) => 7 * 9;


//задачи
let f1 = document.querySelector(".f1");

let a1 = 1;
f1.onclick = function t1() {
    document.querySelector(".out").innerHTML = a1;
}


let a2 = 8;
function t2() {
return a2;
}

document.querySelector(".f1").onclick = function() {
    document.querySelector(".out").textContent = t2();
}


function t3(a,b) {
return a+b;
}
document.querySelector(".f1").onclick = () => {
    document.querySelector(".out").textContent = t3(3,4);
}
document.querySelector(".f2").onclick = () => {
    document.querySelector(".out").textContent = t3(5,6);
}
