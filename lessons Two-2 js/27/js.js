let block = document.getElementById ("test");
let left = 0;
let right = 0;
let bottom = 0;
let top = 0;
document.onkeydown = function (event) {
    console.log (event)
    if (event.key == "ArrowRight") {
        block.style.left = left + "px";
        left++;
    }

    if (event.key == "ArrowLeft") {
        block.style.right = right + "px";
        right++;
    }

    if (event.key == "ArrowUp") {
        block.style.bottom = bottom + "px";
        bottom++;
    }

    if (event.key == "ArrowDown") {
        block.style.top = topp + "px";
        top++;
    }

}

document.onkeyup = function(event) {
    console.log("отпустили клавишу");
}