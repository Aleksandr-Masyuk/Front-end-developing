// for (let i = 0; i < 6; i++) {
//     console.log(i);
// }

// let k = 0;
// while (k < 5) {
//     k++;
//     console.log("k: "+k)
// }

// let sum = 0;
// let p = 0;
// while (p <= 3) {  //1+2+3
//     sum = sum + p;
//     p++;
// }
// console.log("sum = "+sum);

// let out = document.querySelector(".out");
// let outStr = "";
// p = 0;
// let flag = 3;

// while (p < 4) {
//     p1 = 0;
//     while (p1 < 4) {
//         if (p1 < flag) {
//             outStr += "0";
//         }
//         else {
//             outStr += "*";
//         }
//         p1++;

//     }
//     flag--;
//     outStr += "<br>";
//     p++;
// }
//out.innerHTML = outStr;


//задачи


let out = document.querySelector(".out");

// let i = 0;

// document.querySelector(".b1").onclick = () => {
// while (i < 50) {
//     i++;
//     out.textContent += i + " ";
// }
// }


// let k = 0;

// document.querySelector(".b1").onclick = () => {
//     while (k < 122) {
//         k+=2;
//         out.textContent += k + " ";
//     }
// }


let j = 25;

document.querySelector(".b1").onclick = () => {
    while (j >= 7) {
        out.textContent += j + " ";
        j--;
    }
}