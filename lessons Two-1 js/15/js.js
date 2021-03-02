let radio = document.getElementsByName("prim");

for (let i=0; i<radio.length; i++) {
    radio[i].onchange = testRadio;
}

function testRadio() {
    console.log (this.value);
}

document.getElementById("one").onclick = checkRadio;

function checkRadio() {
    let m = document.getElementsByName("prim");
    for(let i=0; i<m.length; i++) {
        if (m[i].checked) {
            alert(m[i].value);
            break;
        }
    }
}