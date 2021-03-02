// let  a = new Set();
// a.add(1);
// a.add("see");
// a.add("hello");
// a.add(1);
// console.log(a);
// console.log(a[1]); //не работает с set

// console.log(a.has(1)); // проверяеи существует ли элемент под интдексом

// console.log(a.size);  //количество элементов

// //вывод
// for (let item of a) {
//     console.log(item);
// }

// //проверка на ункальные элементы массива
// let arr = [2,3,4,5,7,97,7,"fwer",55,7];

// let b = new Set(arr);
// console.log(b);

// //преабразует набор(set) в массив 
// let bArr = Array.from(b);
// console.log(bArr);


//задачи
let s1 = new Set();

s1.add("h");
s1.add("b");
s1.add("o");
s1.add("h");

for (let item of s1) {
    console.log(item);
}

let b2 = document.querySelector(".b2");

b2.onclick = function(f2) {
    
}