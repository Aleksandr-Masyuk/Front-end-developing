
document.querySelector("button").onclick = function() {
    let num1 = +document.querySelector("#num1").value;
    let num2 = +document.querySelector("#num2").value;
    let out = document.querySelector("#out");

    if (num1 > num2) {
        out.innerHTML = num1 + " больше";
    }

    else if (num2 > num1) {
        out.innerHTML = num2 + " больше";
    }

    else {
        out.innerHTML = "равны";
    }

}