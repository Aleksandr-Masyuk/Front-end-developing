document.querySelector(".one").onclick = () => {
  let a = document.querySelector(".i-1").value;
  console.log(a);
};

document.querySelector(".two").onclick = () => {
  let a = +document.querySelector(".i-2").value; // + говорит скрипту что это число, можно проводить матем операции
  console.log(a + 5);
};

document.querySelector(".three").onclick = () => {
  let a = document.querySelector(".i-3").value;
  document.querySelector(".three").style.background = a;
  console.log(a);
};

document.querySelector(".four").onclick = () => {
  let a = document.querySelector(".i-4").value;
  console.log(a);
};

document.querySelector("#five").onchange = () => {
  let a = document.querySelector("#five").value;
  console.log(a);
};
document.querySelector("#five").value = 3; //выбор определенного элемента

document.querySelector(".i-5").onchange = () => {
  if (document.querySelector(".i-5").checked == true) {
    //проверка выбран ли
    let a = document.querySelector(".i-5").value;
    console.log(a);
  }
};

document.querySelector(".i-5").checked = true; //присваиваю состояние

let r = document.querySelectorAll("input[name='r]"); //получил коллекцию элементов

for (let i = 0; i < r.length; i++) {
  if (r[i].checked == true) {
    console.log(r[i].value);
    break;
  }
}

document.querySelector(".radio").onclick = () => {
  let r = document.querySelectorAll("input[name='r']"); //получил коллекцию элементов
  for (let i = 0; i < r.length; i++) {
    if (r[i].checked) {
      console.log(r[i].value);
      break;
    }
  }
};
