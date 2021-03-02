// window.addEventListener("storage", function(e) { //взаимодейсвие страниц
//     console.log("change");
// });


// localStorage.setItem("data", 5);
// let ls = localStorage.getItem("data");
// console.log(ls);

// const a = [3,4,5];
// localStorage.setItem("a", JSON.stringify(a)); //при сохранении в локал массив будет строкой, необходимо обратно преобразовать в массив. JSON.stringify(a) преобразовали в массив
// b = JSON.stringify(b);
// let b = localStorage.getItem("a");
// console.log(typeof b);

//задачи

let b1 = document.querySelector(".b1");

// b1.onclick = () => {
//     localStorage.setItem("5", 11);
// }

const a2 = [71,6,5]
// b1.onclick = () => {
//     localStorage.setItem("a2", (a2));
// }

let out = document.querySelector(".out");
    b1.onclick = () => {
    localStorage.setItem("a2", (a2));
    let x = localStorage.getItem("a2");
    console.log(x);
    out.textContent += x;
}
