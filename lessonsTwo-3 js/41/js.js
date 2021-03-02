// let div4 = document.getElementsByClassName("four4"); //один элемнт
// //let p = div4.getElementsByTagName("p"); // ищим элемнеты внутри див /массив
// let div = document.getElementsByTagName("div"); //тоже всегда массив
// console.log(div);
// div[2].style.background = "red";


// let div = document.querySelector("div").querySelector("p"); // селекторы как в css/ получу первый див/ можно прописпать дальнейший путь
// // либо let div = document.querySelector("div p");
// let div2 = document.querySelectorAll(".four4 p");// собирает масссив
// console.log(div2);

// four4.style.background = "blue"; // прямое обращение по ид


let div = document.querySelector("div");
let child = div.childNodes; //вложенные элементы/ все узлы + текстовые переносы + пробелы
//console.log(div.firstChild); //первый элемент  lastChild последний
child = div.children; //только вложенные элементы
console.log(child);

let hyper = document.querySelector("a");
console.log(hyper.parentElement); //получение родительского элемента
console.log(hyper.parentElement.parentElement); //получение родительского элемента выше
console.log(hyper.parentElement.nextSibling); //получение следующего родительского элемента
console.log(hyper.parentElement.previousSibling); //предыдущий элемент