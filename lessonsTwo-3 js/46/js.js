let out = document.querySelector(".out");

// for (let i = 0; i < 5; i++) {
//     for (let k = 0; k <= 10; k++) {
//         out.innerHTML += k;
//     }
//     out.innerHTML += "/";
// }

// for (let i = 1; i < 10; i++) {
//     //out.innerHTML += "3*" + i + "=" + (i*3) + "<br>";
//     // сокращение, итeрполяция
    
//     for (let k = 1; k < 10; k++) {
//         out.innerHTML +=`${i}*${k}=${k*i}<br>`;
//     }
//     out.innerHTML += "<hr>";
    
// }


//задачи

// for (let i = 0; i < 3; i++) {
//     i = "_";
//     for (let k = 0; k < 3; k++) {
//         out.innerHTML += "***" + i;
//     }
// }

// for (let i = 1; i <= 3; i++) {
//     //out.innerHTML += "<br>";

//     for (let k = 0; k < 3; k++) {
//         k = "*_*_*_";
//         out.innerHTML += i + "<br>" + k + "<br>";
//     }
    
// }

for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 3; k++) {
        out.innerHTML += "*_"
    }
    out.innerHTML += "<br>";
}