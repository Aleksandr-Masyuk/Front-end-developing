// let a = [4,5,6];

// let b = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];

// console.log(b);

// for (let i = 0; i < b.length; i++) {
//     //console.log(b[i]);
//     let c = b[i]; //с - массив
//     for (k = 0; k < c.length; k++) {
//         //console.log(c[k]);
//     }
// }

// // //перебераю массив с конца
// // for (let i = 0; i < b.length; i++) {
// //     let c = b[i];

// //     for (let k = c.length - 1; k >= 0; k--) {
// //         console.log(c[k]);
// //     }
// // }


// // let out = "";
// // for (let i = 0; i < b.length; i++) {
// //     for (let k = 0; k < b[i].length; k++) {
// //         console.log(b[i][k]);
// //         out += b[i][k] + " ";
// //     }
// //     out += "<br>";
// // }

// //document.querySelector(".out").innerHTML = out;

// let out = "";
// for (let i = 0; i < b.length; i++) {
//     for (let k = 0; k < b[i].length; k++) {
//         //console.log(b[i][k]);
//         if (b[i][k] > 4) {  //больше 4
//             out += b[i][k] + " ";
//         }
//     }
//     out += "<br>";
// }

// document.querySelector(".out").innerHTML = out;


// let d = [1,0,0,0,0];
// document.querySelector(".out2").innerHTML = d;
// let q = 0;
// document.querySelector('button').onclick = () => {
//     if (q + 1 < 5) {
//     d[q] = 0;
//     d[q+1] = 1;
//     q++;
// }
//     document.querySelector(".out2").innerHTML = d;
// }



//задачи

let b1 = document.querySelector(".b1");
let out = document.querySelector(".out");

let a = [11,55,23];

b1.onclick = () => {
    for (let i = 0; i < a.length; i++) {
        out.innerHTML = a[1];
        console.log(a);
    }
}
