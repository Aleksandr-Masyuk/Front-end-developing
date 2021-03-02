// const a = {
//     "a" : 5,
//     "b" : "hello",
//     "z2" : "hi",
//     y43 : 1999
// }; //ассоциативный массив

// //происвоить элемент массива
// a.yyyy = 555;

// //замена значения массива
// a.b = "tay"

// //удаление элемента
// delete a.b;


// console.log(a);
// console.log(a.z2);

// let k = "y43";
// console.log(a[k]);


// let out = "";
// for (let key in a) {
//     out += key + " " + a[key] + "<br>";
// }

// document.querySelector(".out").innerHTML = out;

let b1 = document.querySelector(".b1");
let out =     document.querySelector(".out");
b1.onclick = function() {


let a1 = {
    "one" : 15,
    "two" : 16,
    "five" : 20
    };

    out.innerHTML = a1.two;

}