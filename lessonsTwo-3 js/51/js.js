// const one = document.querySelector(".one");

// one.style.width = "150px";
// one.style.fontSize = "50px"; 


// // присваивам one второй класс
// one.classList.add("two");
// // еще один класс 
// one.classList.add("two", "three");

// //удаляем класс
// //one.classList.remove("two")

// const toggle = document.querySelector(".toggle");

// toggle.onclick = () => {
//     one.classList.remove("two");
// }



// //атрибуты  data

// //читаю атрибут 
// console.log(one.getAttribute("data"));
// console.log(document.querySelector("link").getAttribute("href"));

// one.setAttribute("data-nam", 6);



// let gas = document.querySelectorAll(".gas");
// let out = document.querySelector(".out");
// for (let i = 0; i < gas.length; i++) {
//     gas[i].onclick = function() {
//         let gallons = document.querySelector(".gallons").value;
//         let amount = this.getAttribute("data");
//         out.textContent = gallons * amount + " "+"P.";
//     }
// }

// //создал элемнт 
// let a = document.createElement("div");
// a.textContent = "hello";
// //добавляю класс
// a.classList.add("fr");
// console.log(a);

// //вывожу элемент на страницу
// document.querySelector(".test2").appendChild(a);



//задачи

let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
const out = document.querySelector(".out");

// b1.onclick = function () {
//     out.style.width = "200px";
//     out.style.height = "40px";
// }


b1.onclick = function () {
    out.classList.add("bg");
}

b2.onclick = function () {
    out.classList.remove("bg");
}


