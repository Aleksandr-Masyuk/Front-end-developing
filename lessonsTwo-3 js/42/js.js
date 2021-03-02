// document.querySelector("button").onclick = function() {
//     console.log(document.querySelector("#one").value);
//     // стили
//     document.querySelector("button").style.backgroundColor = document.querySelector("#one").value;
// }

// //document.querySelector("button").onclick = () => {
    
// //} // стрелочная функция (как сокращенный вариант)


// document.querySelector("#one").oninput = () => {
//     console.log(document.querySelector("#one").value);
//     document.querySelector("span").innerHTML = document.querySelector("#one").value;
// }

document.querySelector("#btn-1").onclick = () => {
    console.log(document.querySelector("#i2").value);
    let myCheckBox = document.querySelector("#i2");
    console.log(myCheckBox.checked);
    if (myCheckBox.checked) {
        console.log("элемент выбран");
    }
    else {
        console.log("элемент не выбран");
    }
}

document.querySelector("#btn-2").onclick = (event) => {
    event.preventDefault();
    // let text = document.querySelector("#two").value;
    // console.log(text);
    let form = document.querySelector("form");
    console.log(form);
    console.log(form.elements.two.value);
    console.log(form.elements.three.value);

}