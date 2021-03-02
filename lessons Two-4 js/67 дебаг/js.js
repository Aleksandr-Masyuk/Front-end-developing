document.querySelector(".one").onclick = () => {
    let a = +document.querySelector(".i-1").value;
    let out = "";
    for (let i = 0; i <= a; i++) {
        out += i + " ";
    }
    document.querySelector(".out").textContent = out;
}