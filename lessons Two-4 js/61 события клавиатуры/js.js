// document.querySelector(".i-1").onkeypress = function(event) { //клавиша нажата и отпущена
//     console.log("keypress")
//     console.log("charCode:" + " " + event.charCode); //q 113  Q 81
//     console.log("code:" + " " + event.code);
//     console.log("key:" + " " + event.key);
//     console.log("keyCode:" + " " + event.keyCode);
//     console.log(event);
// }



// document.querySelector(".i-1").onkeydown = function(event) {  //клавиша нажата но не отпущена
//     console.log("keydown")
//     console.log("charCode:" + " " + event.charCode); //q 113  Q 81
//     console.log("code:" + " " + event.code);
//     console.log("key:" + " " + event.key);
//     console.log("keyCode:" + " " + event.keyCode);
//     console.log(event);
//     if (event.key == "CapsLock") {
//         document.querySelector(".ch-1").checked = true;
//     }
//     else {
//         document.querySelector(".ch-1").checked = false;
//     }
// }



// document.querySelector(".i-1").onkeyup = function(event) { //клавиша отпущена
//     console.log("keyup")
//     console.log("charCode:" + " " + event.charCode); //q 113  Q 81
//     console.log("code:" + " " + event.code);
//     console.log("key:" + " " + event.key);
//     console.log("keyCode:" + " " + event.keyCode);
//     console.log(event);
// }




// document.querySelector(".i-2").onkeypress = function(event) { //клавиша нажата и отпущена
//     console.log("keypress")
//     console.log("charCode:" + " " + event.charCode); //q 113  Q 81
//     console.log("code:" + " " + event.code);
//     console.log("key:" + " " + event.key);
//     console.log("keyCode:" + " " + event.keyCode);
//     console.log(event);
//     const a = {
//         q : "w",
//         w : "e",
//         e : "1",
//     }
//     document.querySelector(".i-2").value += a[event.key];
//     return false;
// }


//задачи

let i = document.querySelector(".i-1");
let out = document.querySelector(".out");

// i.onkeypress = function(event) {
//     console.log(event);
//     out.textContent += event.key;
//     return;
// 



// i.onkeydown = function(event) {
//     console.log(event);
//     out.textContent += event.keyCode;
//     return;
// }


i.onkeydown = function(event) {
    console.log(event);
    let key = event.keyCode;
    if (key <= 59 && key >= 48) {
        out.textContent = "true"
    }
    else {
        out.textContent = "false"
    }
}