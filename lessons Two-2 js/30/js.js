let namber = Math.floor(10 * Math.random()) + 1;
console.log(namber);
let count = 2;

document.getElementById("check").onclick = function () {
    if (count > 0) {
        let usernum = document.getElementById("mynum").value;
        usernum = parseInt(usernum);
        let out = document.getElementById("out");
        if (usernum == namber) {
            out.innerHTML = "вы угадали число";
        }

        else if (usernum < namber) {
            out.innerHTML = "ваше число меньше";
        }

        else {
            out.innerHTML = "ваше число больше";
        }
        document.getElementById ("count").innerHTML = "осталось попыток: " + count;
        count = count -1;
    }
    else {
        alert ("вы проиграли");
        location.reload();
    }
}