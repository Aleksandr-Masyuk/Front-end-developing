document.onwheel = function (event) {
  console.log(event);
  if (event.deltaY > 0) {
    document.getElementById("line").innerHTML = "вниз";
  } else {
    document.getElementById("line").innerHTML = "вверх";
  }

  //document.getElementById("speed").innerHTML = (event.deltaY);

  let speed = event.deltaY;
  speed = Math.abs(speed);
  if (speed < 100) {
    document.getElementById("speed").innerHTML = "скорость низкая";
  }

  else if (speed < 150) {
      document.getElementById("speed").innerHTML = "скорость средняя"
  }

  else if (speed < 250) {
    document.getElementById("speed").innerHTML = "скорость высокая"
}

  else {
      document.getElementById("speed").innerHTML = "очень высокая";
  }

};
let left = 290;
document.getElementById ("test").onwheel = function (event) {
    let line = event.deltaY;
    left = left + 0.1*line;
    document.getElementById ("test2").style.left = left + "px";
    return false;
}
