let left = document.querySelector(".left");
let right = document.querySelector(".right");
function equalHeight() {
  left.style.height = "auto";
  right.style.height = "auto";
  let leftH = left.offsetHeight;
  let rightH = right.offsetHeight;
  let max = Math.max(leftH, rightH);
  left.style.height = max + "px";
  right.style.height = max + "px";
}
equalHeight();

window.onresize = equalHeight;
