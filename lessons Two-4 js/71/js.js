let out = document.querySelector("#out");
// document.querySelector("#b1").onclick = function t1() {
//     for (let i = 0; i <= 50; i++) {
//         out.innerHTML += i + " ";
//     }
// }

let b1 = document.querySelector("#b1");
// b1.onclick = function t2() {
//     for (let i = 2; i <= 122; i+=2) {
//         out.innerHTML += i + " ";
        
//     }
// }

b1.onclick = () => {
    for (let i = 25; i >= 7; i--) {
        out.innerHTML += i + " ";
    }
}