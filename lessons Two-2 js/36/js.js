document.querySelector(".tabs__header").addEventListener("click", fTabs);
function fTabs(event) {
  console.log(event);
  if (event.target.className == "tab__h") {
      //dataTab номер вкладки которую нужно отоброзить
    let dataTab = event.target.getAttribute("data-tab");
    //отключаю класс active
    let tabH = document.getElementsByClassName ("tab__h");
    for (let i = 0; i<tabH.length; i++) {
        tabH[i].classList.remove("active");
    }
    event.target.classList.add("active");
    //все вкладки с содержимым
    let tabBody = document.getElementsByClassName ("tab__b");
    for (let i = 0; i < tabBody.length; i++) {
        if (dataTab==i) {
            tabBody[i].style.display = "block";
        }
        else {
            tabBody[i].style.display = "none";
        }
    }
  }
}
