setInterval(fSec, 100);
let sec = 0;
let min = 0;
function fSec() {
    document.querySelector("#sec").style.transform = "rotate("+sec+"deg)";
    document.querySelector("#min").style.transform = "rotate("+min+"deg)";

    if (sec+6 == 366) {
        sec = 0;
        min = min + 6;
    }
    sec = sec + 6;

}
