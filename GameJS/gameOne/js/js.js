const user = document.querySelector(".user");
const enter = document.querySelector(".enter");

document.onkeydown = function start(event) {
  if (event.key == "Enter") {
    enter.remove();
    let left = 0;
    let right = 0;
    let bottom = 0;

    let topp = 0;
    let resultScore = 0;
    document.addEventListener("keydown", function (event) {
      if (
        event.key == "ArrowRight" &&
        !vallOne() &&
        !vallTwo() &&
        !vallThree() &&
        !vallFour() &&
        !finish()
      ) {
        user.style.left = left + right + "5px";
        left++;
        resultScore++;
      }

      if (
        event.key == "ArrowLeft" &&
        !vallOne() &&
        !vallTwo() &&
        !vallThree() &&
        !vallFour() &&
        !finish()
      ) {
        user.style.left = right + left + "5px";
        --left;
        resultScore++;
      }

      if (
        event.key == "ArrowUp" &&
        !vallOne() &&
        !vallTwo() &&
        !vallThree() &&
        !vallFour() &&
        !finish()
      ) {
        user.style.top = topp + bottom + "5px";
        --bottom;
        resultScore++;
      }

      if (
        event.key == "ArrowDown" &&
        !vallOne() &&
        !vallTwo() &&
        !vallThree() &&
        !vallFour() &&
        !finish()
      ) {
        user.style.top = bottom + topp + "5px";
        topp++;
        resultScore++;
      }

      function corsBorders() {
        const field = document.querySelector(".field");
        let corsField = document
          .querySelector(".field")
          .getBoundingClientRect();
        const corsUser = document
          .querySelector(".user")
          .getBoundingClientRect();
        if (
          corsField.top >= corsUser.top ||
          corsField.bottom <= corsUser.bottom ||
          corsField.left >= corsUser.left ||
          corsField.right <= corsUser.right
        ) {
          field.style.border = "20px solid red";
          alert("Столкновение, попробуем еще раз?");
          reset();
        }
      }

      corsBorders();

      document.querySelector(".score").innerHTML = `ход ${resultScore}`;
    });

    sizeUser();

    motionObjTwo();

    motionObjThree();

    intervalMotionOne();

    intervalMotionFour();

    FinishTimer();

    setInterval(timer, 1000);
    function timer() {
      let elem = document.querySelector(".time");
      elem.value = parseInt(elem.value) + 1;
    }

    function FinishTimer() {
      const elem = document.querySelector(".finish_time");
      let finish = document.querySelector(".finish");
      intervalTimer = setInterval(() => {
        elem.value = parseInt(elem.value) - 1;
        if (elem.value == 0) {
          alert("время вышло");
          reset();
        }
      }, 1000);
    }

    function vallOne() {
      if (one(box1, box2)) {
        alert("Столкновение, попробуем еще раз?");
        reset();
        return true;
      }
    }

    const box1 = document.querySelector(".user");
    const box2 = document.querySelector(".vall_one");

    function one(obj1, obj2) {
      return (
        obj1.offsetLeft <= obj2.offsetLeft + obj2.offsetWidth &&
        obj1.offsetLeft + obj1.offsetWidth >= obj2.offsetLeft &&
        obj1.offsetTop + obj1.offsetHeight >= obj2.offsetTop &&
        obj1.offsetTop <= obj2.offsetTop + obj2.offsetHeight
      );
    }

    function vallTwo() {
      if (two(box1, box3)) {
        alert("Столкновение, попробуем еще раз?");
        reset();
        return true;
      }
    }

    const box3 = document.querySelector(".vall_two");

    function two(obj1, obj3) {
      return (
        obj1.offsetLeft <= obj3.offsetLeft + obj3.offsetWidth &&
        obj1.offsetLeft + obj1.offsetWidth >= obj3.offsetLeft &&
        obj1.offsetTop + obj1.offsetHeight >= obj3.offsetTop &&
        obj1.offsetTop <= obj3.offsetTop + obj3.offsetHeight
      );
    }

    function vallThree() {
      if (three(box1, box4)) {
        alert("Столкновение, попробуем еще раз?");
        reset();
        return true;
      }
    }

    const box4 = document.querySelector(".vall_three");

    function three(obj1, obj4) {
      return (
        obj1.offsetLeft <= obj4.offsetLeft + obj4.offsetWidth &&
        obj1.offsetLeft + obj1.offsetWidth >= obj4.offsetLeft &&
        obj1.offsetTop + obj1.offsetHeight >= obj4.offsetTop &&
        obj1.offsetTop <= obj4.offsetTop + obj4.offsetHeight
      );
    }

    function vallFour() {
      if (four(box1, box5)) {
        alert("Столкновение, попробуем еще раз?");
        reset();
        return true;
      }
    }

    const box5 = document.querySelector(".vall_four");

    function four(obj1, obj5) {
      return (
        obj1.offsetLeft <= obj5.offsetLeft + obj5.offsetWidth &&
        obj1.offsetLeft + obj1.offsetWidth >= obj5.offsetLeft &&
        obj1.offsetTop + obj1.offsetHeight >= obj5.offsetTop &&
        obj1.offsetTop <= obj5.offsetTop + obj5.offsetHeight
      );
    }

    function finish() {
      if (blockFinish(box1, box6)) {
        alert(`Победа! \n использовано ходов: ${resultScore}`);
        reset();
        start();
        return true;
      }
    }

    const box6 = document.querySelector(".finish");

    function blockFinish(obj1, obj6) {
      return (
        obj1.offsetLeft <= obj6.offsetLeft + obj6.offsetWidth &&
        obj1.offsetLeft + obj1.offsetWidth >= obj6.offsetLeft &&
        obj1.offsetTop + obj1.offsetHeight >= obj6.offsetTop &&
        obj1.offsetTop <= obj6.offsetTop + obj6.offsetHeight
      );
    }
  }
};
function reset() {
  window.location.reload();
}

function sizeUser() {
  let width = 3;
  let height = 3;
  setInterval(() => {
    user.style.width = width + "1px";
    width++;
    user.style.height = height + "1px";
    height++;
  }, 1500);
}

function motionObjTwo() {
  const vall_two = document.querySelector(".vall_two");

  function marginTopTwo() {
    let marginObjOneMotionUp = 32;
    intervalTwoUp = setInterval(() => {
      vall_two.style.marginTop = marginObjOneMotionUp + "1px";
      marginObjOneMotionUp--;
      if (marginObjOneMotionUp == 0) {
        clearInterval(intervalTwoUp);
        marginTopTwoRevers();
      }
    }, 50);
  }

  function marginTopTwoRevers() {
    let marginObjOneMotionDown = 0;
    intervalTwoDown = setInterval(() => {
      vall_two.style.marginTop = marginObjOneMotionDown + "1px";
      marginObjOneMotionDown++;
      if (marginObjOneMotionDown == 32) {
        clearInterval(intervalTwoDown);
        marginTopTwo();
      }
    }, 50);
  }
  marginTopTwo();
}

function motionObjThree() {
  const vall_three = document.querySelector(".vall_three");

  function marginTopThree() {
    let marginObjTwoMotionUp = 0;
    intervalThreeDown = setInterval(() => {
      vall_three.style.marginTop = marginObjTwoMotionUp + "1px";
      marginObjTwoMotionUp++;
      if (marginObjTwoMotionUp == 32) {
        clearInterval(intervalThreeDown);
        marginTopThreeRevers();
      }
    }, 50);
  }

  function marginTopThreeRevers() {
    let marginObjTwoMotionDown = 32;
    intervalThreeUp = setInterval(() => {
      vall_three.style.marginTop = marginObjTwoMotionDown + "1px";
      marginObjTwoMotionDown--;
      if (marginObjTwoMotionDown == 0) {
        clearInterval(intervalThreeUp);
        marginTopThree();
      }
    }, 50);
  }
  marginTopThree();
}

function intervalMotionOne() {
  setInterval(() => {
    motionObjOne();
  }, 3000);
}
function motionObjOne() {
  const vall_one = document.querySelector(".vall_one");

  function marginTopOne() {
    intervalOneDown = setTimeout(() => {
      vall_one.classList.add("vall_one_down");
    }, 1000);
    intervalOneUp = setTimeout(() => {
      vall_one.classList.remove("vall_one_down");
    }, 2000);
  }
  marginTopOne();
}

function intervalMotionFour() {
  setInterval(() => {
    motionObjFour();
  }, 3000);
}
function motionObjFour() {
  const vall_four = document.querySelector(".vall_four");

  function marginTopFour() {
    intervalFourDown = setTimeout(() => {
      vall_four.classList.add("vall_four_up");
    }, 1000);
    intervalFourUp = setTimeout(() => {
      vall_four.classList.remove("vall_four_up");
    }, 2000);
  }
  marginTopFour();
}
