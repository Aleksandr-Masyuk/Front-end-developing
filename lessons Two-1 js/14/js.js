let p = document.getElementsByTagName ("p");
let one = document.getElementsByClassName ("one");


console.log(p);

for (let i=0; i<p.length; i++) {
    p[i].onclick = f1;
}

for (let i=0; i<one.length; i++) {
    one[i].onclick = f2;
}


function f1() {
    //alert("hello");
    console.log(this);
    this.style.background = "red";
}

function f2() {
    this.style.fontWeight = "bold";
}