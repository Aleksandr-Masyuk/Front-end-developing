let arr = [4,7,9];

// let div = document.getElementsByTagName("div");
// console.log(div)//вывело коллекцию

// let div2 = document.querySelectorAll("div");
// console.log(div2)//вывело лист

// for (let i = 0; i < div.length; i++) {
//     console.log(div[i]);
// }



// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// for (let key in arr) {
//     console.log(arr[key]);
// }


// for (let item of arr) {
//     console.log(key);
// }


//задачи

let b1 = document.querySelector(".b1");

//b1.onclick = function(f1) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//         document.querySelector(".out").textContent += arr[i] + " ";
//     }
// }

// let out = document.querySelector(".out");
// b1.onclick = function(f1) {
//     for (let key in arr) {
//         out.innerHTML += key + " " + "--"  + " " + arr + "<br>";
//     }
//     console.log(arr);
    
// }

b1.onclick = () => {
    let div = document.getElementsByClassName("div3");
    for (let i = 0; i < div.length; i++) {
        console.log(div[i]);
        div[i].innerHTML = "3";
    }
}
