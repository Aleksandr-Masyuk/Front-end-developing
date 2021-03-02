let out = "";
let q = 3;
let q2 = 7;

for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 8; k++) {
        if (k < q || k > q2) {
            out += "&nbsp";
        }
        else {
            out += "*";
        }
        
    }
    q--;
    q2++;
    out += "<br>";
}

document.querySelector(".out").innerHTML = out;