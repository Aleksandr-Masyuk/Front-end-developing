// //console.log(this)

// function a () {
//     console.log(this);
//     console.log(3+5/2);
//     this.style.background = "red";
// }
// //a();

// // document.querySelector("p").onclick = a;

// // let p = document.querySelectorAll("p");
// // // p.forEach(function(element){   //перебираю коллекцию
// // //     element.onclick = a;
// // // })

// // console.log(p);

// document.querySelector("p").addEventListener("click", a);

let b1 = document.querySelector(".b1");
//let inp = document.querySelector("#inp").value;
let out = document.querySelector(".out");


b1.onclick = () => {
  let inp = document.querySelector(".inp").value;
  console.log(inp);
  alert("привет" + " " + inp);
  out.textContent = "привет" + " " + inp;
};
