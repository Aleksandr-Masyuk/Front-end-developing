// for (старт. работам пока соответствует. счетчик) {
    
// }



let div = document.querySelectorAll(".one");
console.log(div);
// //div.style.background = "red";


// for (let i = 0; i < div.length; i++) {
//     console.log(div[i]);
//     div[i].style.background = "red";
//     div[i].onclick = two;
// }

// function two() {
//     console.log("work");
// }

// let b = document.getElementsByClassName("one");
// console.log(b);

// let c = document.getElementsByTagName("div");
// console.log(c);

// for (let i = 0; i < b.length; i++) {
//     b[i].style.border = "1px solid black";
// }


document.querySelector("button").onclick = () => {
    let r = document.querySelectorAll("input[type='radio']");
    console.log(r);
    for (let i = 0; i < r.length; i++) {
        if (r[i].checked) console.log(r[i].value);
    }
}


// for (let i = 0; i < 10; i++) {
//     document.querySelector("#out").innerHTML += i+" ";
// }

// лучше так

let out = "";
for (let i = 0; i < 10; i++) {
    if (i == 6) continue; // пропустиить
    out += i + " ";
    //if (i == 6) break; // завершить
}
document.querySelector("#out").innerHTML = out;
