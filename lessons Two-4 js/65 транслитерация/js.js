function ruToLat(event) {
  const ru = {
    а: "a",
    б: "в",
    ш: "r",
    н: "j",
    д: "d",
    е: "f",
    ё: "е",
    щ: "j",
    г: "v",
    v: "q",
    к: "c",
    ч: "o",
    х: "u",
    я: "x",
    a: "w",
    п: "в",
    м: "р",
    в: "о",
    с: "l",
    с: "w",
    ф: "d",
    и: "d",
    п: "д",
    м: "й",
    р: "ю",
    щ: "shcn",
    л: "f",
    б: "o",
    ъ: "c",
    у: "vu",
    " ": " "
  };
  //let k = event.key;
//   let text = document.querySelector(".i-1").value;
//   let str = "";
//   for (let i = 0; i < text.lenght; i++) {
//     let k = text[i];
//     if (ru[k] != undefined) {
//       str += ru[k];
//     } else {
//       if ((ru[k.toLowerCase()])) {
//         let s = ru[k.toLowerCase()];
//         str += s.toUpperCase();
//       }
//     }
//   }
//   document.querySelector(".out").innerHTML = str;
//   console.log(str);
// }

// document.querySelector(".i-1").oninput = ruToLat;

let text = document.querySelector(".i").value;
let str = "";
for (let i = 0; i < text.lenght; i++) {
  let k = text[i];
  if (ru[k] != undefined) {
    str += ru[k];
  }
  else {
    if ((ru[k.toLowerCase()])) {
      let s = ru[k.toLowerCase()];
      str += s.toUpperCase();
    }
  }
}
document.querySelector(".out").innerHTML = str;

}

document.querySelector(".i").ominput = ruToLat;

//не могу решить, нет вывода