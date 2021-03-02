let mas = document.getElementsByClassName("layer");
let j = 0;
let y = 0;
document.querySelector(".jlehmann").onmousewheel = function(event) {
    if (event.deltaY > 0) {
        y = y + Math.round(event.deltaY);
    }
    
    else {
        y = y - Math.round(event.deltaY);
    }
    
    mas[j].style.top = (y*0.1) + "px";
    if (y*0.1 >450) {
        j++;
        y = 0;
    }
    if (j == mas.length-1) {
        document.querySelector(".jlehmann").onmousewheel = null;
    }
}






//450px = 100%
//5000 = x
//450 / 5000 = 0.09 = 0.1px