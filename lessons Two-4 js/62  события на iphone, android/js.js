let a1 = 0;
document.querySelector(".block-1").onclick = function() {
    a1++;
    document.querySelector(".out-1").innerHTML = "click" + a1;
}


let a2 = 0;
document.querySelector(".block-2").ondblclick = function() {
    a2++;
    document.querySelector(".out-2").innerHTML = "dblclick" + a2;
}


let a3 = 0;
document.querySelector(".block-3").onmousemove = function() {
    a3++;
    document.querySelector(".out-3").innerHTML = "mousemove" + a3;
}


let a4 = 0;
document.querySelector(".block-4").onmouseenter = function() {
    a4++;
    document.querySelector(".out-4").innerHTML = "mouseenter" + a4;
}


let a5 = 0;
document.querySelector(".block-5").onmouseleave = function() {
    a5++;
    document.querySelector(".out-5").innerHTML = "mouseleswe" + a5;
}