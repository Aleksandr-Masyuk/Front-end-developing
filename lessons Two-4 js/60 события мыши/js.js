// document.querySelector(".one").onclick = function (event) {
//     console.log(event);
//     console.log("click");
// }

// document.querySelector(".two").onclick = function() {
//     console.log("click2");
// }


// document.querySelector(".two").ondblclick = () => {
//     console.log("double");
// }

// document.querySelector(".two").oncontextmenu = function() {
//     console.log("right button");
//     return false;
// }

// // let w = 50;
// // document.querySelector(".three").onmousemove = () => { //движение мыши
// //     document.querySelector(".three").style.width = w + "px";
// //     w++;
// // }

// document.querySelector(".three").onmouseenter = () => { //наведение мыши
//     document.querySelector(".three").style.background = "green";
// }

// document.querySelector(".three").onmouseleave = () => { //увели мышь
//     document.querySelector(".three").style.background = "blue";
// }

// document.querySelector(".three").onmousedown = () => { //навели и удерживаете нажатие
//     document.querySelector(".three").style.background = "red";
// }

// document.querySelector(".three").onmouseup = () => { //навели и удержали и отпустили
//     document.querySelector(".three").style.background = "orange";
// }

// let p = 10;
// document.querySelector("button").onclick = function (event) {
//     p++;
//     document.querySelector("progress").value = p;
// }

let one = document.querySelector(".one");
let out = document.querySelector(".out");

// one.onclick = function() {
//     console.log(one);
//     out.textContent = one.innerText;
// }

// one.onclick = function(event) {
//     console.log(event);
//     if (event.altKey == false) {
//         out.textContent = "alt false";
//     }
//     else {
//         out.textContent = " alt true";
//     }
// }


let w = 50;
one.onclick = () => {
    one.style.width = w + "px";
    w += 50;
    out.textContent = w + " " + "px";
}