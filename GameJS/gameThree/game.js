let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

let fonImg = new Image();
fonImg.src = "img/fon.png";
let enemyImg = new Image();
enemyImg.src = "img/enemy.png";
let playerImg = new Image();
playerImg.src = "img/palayer.png";
let fireImg = new Image();
fireImg.src = "img/fire.png";
let explImg = new Image();
explImg.src = "img/expl.png";

let startEnemy = [];
let fire = [];
let expl = [];
let timer = 0;
let player = {x:300, y:740};

canvas.addEventListener("mousemove", function(event) {
    player.x = event.offsetX-25;
    player.y = event.offsetY-13;
})


fonImg.onload = function() {
    game();
}

function game() {
    update();
    render();
    requestAnimationFrame(game);
}

function update() {

    timer++;


    if(timer % 25 == 0) {
        startEnemy.push({
            x:Math.random() * 560,
            y:20,
            dx:Math.random() * 2 -  1,
            dy:2,
            del:0,
        });
    }

if (timer % 20 == 0) {
    fire.push({x:player.x + 10, y:player.y, dx:0, dy:-12});
}

//анимация выстрела
for (i in fire) {
    fire[i].x = fire[i].x+fire[i].dx;
    fire[i].y = fire[i].y+fire[i].dy;

    if (fire[i].y<-30) fire.splice(i, 1);
}

//анимация взрыва
for (i in expl) {
    expl[i].animx = expl[i].animx + 0.2;
    expl.splice(i, 1)
}

//физика врага
    for(i in startEnemy) {
        startEnemy[i].x = startEnemy[i].x + startEnemy[i].dx;
        startEnemy[i].y = startEnemy[i].y + startEnemy[i].dy;
    
        if (startEnemy[i].x >= 540 || startEnemy[i].x < 0) startEnemy[i].dx = -startEnemy[i].dx;
    
        if (startEnemy[i].y >= 760) startEnemy[i].dy = gameOver();
        function gameOver() {
            alert("GAME OVER")
        }

        //проверяем на столкновение
        for (j in fire) {
            if (Math.abs(startEnemy[i].x + 25 - fire[j].x - 15) < 50 && Math.abs(startEnemy[i].y - fire[j].y) <25) {
                //произошло столкновение

                //спаун взрыва
                expl.push({x:startEnemy[i].x - 25,y:startEnemy[i].y - 25,animx:0,animy:0});

                //помечаем врага на удаление
                startEnemy[i].del = 1;
                fire.splice(j, 1); break;
            }
        }

        //удаляем врага
        if (startEnemy[i].del == 1) startEnemy.splice(i, 1);

        //столкновение обьектов
        function collision() {
            for (i in startEnemy) {
                if (player.x < startEnemy[i].x + 30 &&
                    player.x + 30 > startEnemy[i].x &&
                    player.y < startEnemy[i].y + 30  &&
                    player.y + 30 > startEnemy[i].y) {
                        console.log(stop)
                        collision_class();
                        alert("GAME OVER")
                    }
            }




            function collision_class() {
                document.querySelector(".wrapper").classList.add("wrapper_collision");

                setTimeout(() => {
                document.querySelector(".wrapper").classList.remove("wrapper_collision");
                }, 200);
            }
        }
        collision()

    };

};



function render() {
    context.drawImage (fonImg, 0, 0, 600, 800);
    context.drawImage(playerImg, player.x, player.y);
    for(i in startEnemy) context.drawImage (enemyImg, startEnemy[i].x, startEnemy[i].y, 50, 50);
    for (i in fire) context.drawImage(fireImg, fire[i].x, fire[i].y, 30, 30);

    for (i in expl)
    context.drawImage(explImg, 120 * Math.floor(expl[i].animx), 128 * Math.floor(expl[i].animy), 128, 128, expl[i].x, expl[i].y, 100, 100);
}

let requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 20);
        }
})();



