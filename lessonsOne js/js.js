//урок 2
/*
function f1(){
    alert('узнать что такое матрица');
}
function f2(){
    alert('забыть все');
}
function f3(){
    alert('тук тук');
}
function f4(){
    alert('кто там'); 
}

//урок 3 переменные

function sv(){
    var koren;
koren = document.getElementById('kv').value;
    alert(koren*koren);
}

var one, two, tree, four;
one = 1;
two = 2;
tree = 3;
four = 'ok';
alert(one+two*tree);
alert(four);

//урок 4 калькулятор

function plus(){
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    result = num1+num2;
    document.getElementById('out').innerHTML = result;
}

function minus(){
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    result = num1-num2;
    document.getElementById('out').innerHTML = result;
}
//урок 5 вывод информации


function out(){
    var p;
    p = document.getElementById('out');
    //p.innerHTML = 'hello';
    //p.insertAdjacentHTML('afterEnd','www.4mlbpb.com')
    p.outerHTML = '<div class="one">я тебя нашелвекап</div>'
}

//урок 6 ветвлениия

var a, b;
a = 1;
b = 8;

if (a>b){
alert ('первое число больше');
}

else if (a==b){
alert ('числа равны');
}

else {
    alert ('выражение ошибочно')
}

function f1(){
    var n, p;
    n = document.getElementById('num1').value;
    p = document.getElementById('out');
    n = parseInt(n);
    if (n==100){
    p.innerHTML = 'равно 100';
    }
    else if (n>100){
    p.innerHTML = 'больше 100';
    }
    
    if(n<100){
    p.innerHTML = 'меньше 100';
    }
}

//урок 7 цикл whilе

function f2(){
    var p, p1;
    p = document.getElementById('out');
    p1 = document.getElementById('out1');
    var i=0;
    while (i<50){
        p.innerHTML+=i+' ';
        i++;
    }

var j=0;
do{
    p1.innerHTML+=j+' ';
    j++;
}
while (j<30);

}

//урок 8 угадай число

var prNum, tempOut;
prNum = Math.floor((Math.random() * 10) + 1);
//tempOut = document.getElementById('temp-out');
//tempOut.innerHTML = prNum;
console.log(prNum);


function f1(){
    var num, out;
   

    num = document.getElementById('mynum').value;
    out = document.getElementById('out');

    if (num == prNum){
        out.innerHTML = 'вы угадали число';
    }

    else if (num > prNum){
        out.innerHTML = 'ваше число выше';
    }

    else {
        out.innerHTML = 'ваше число ниже';
    }

}

//урок 9 цикл for


function f1(){
    var p;
    p = document.getElementById('out');
    for (var i=0; i<100; i++){
        p.innerHTML += i + ' ';
    }
}


//урок 11 массивы

var ml = [0, 1, 'hello'];
ml[5] = 555;
console.log (ml);
//alert (ml.length);

//for(var i=0; i<ml.length; i++){
    //document.getElementById('out').innerHTML += ml[i]+'<br>';
//}

function masOut(){
   var p = document.getElementById('out');
   var str='';
   for(var i=0; i<ml.length; i++){
       str += i +' - ' + ml[i]+'<br>';
   }
   p.innerHTML = str;
}

masOut();

function p1(){
    var i1 = document.getElementById('i1').value;
    ml.push(i1);
    masOut();
}

function p2(){
    ml.pop();
    masOut();
}

//урок 12 создаем слайдер

document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;

function sliderLeft(){
    var polosa = document.getElementById('polosa');
    left = left - 256;
    if (left < -1200){
        left = 0;
    }
    polosa.style.left = left +'px';

}

//урок 13 элементы и классы

let p = document.getElementsByTagName('p');
let one = document.getElementsByClassName('one');
for (let i=0; i<p.length; i++){
    p[i].onclick = f1;
}

for (let i=0; i<one.length; i++){
    one[i].onclick = f2;
}

function f1(){
    //alert('hello');
    this.style.background = 'red';
}

function f2(){
    this.style.fontWeight = 'bold';

}


урок 14 css generator


document.getElementById('r1').oninput = cssGenerator;

function cssGenerator(){
    let div = document.getElementById('test');
    let out = document.getElementById('out');
    div.style.borderRadius = this.value + 'px';
    out.innerHTML = '-webkit-border-radius:' + this.value+ 'px;\n';
    out.innerHTML += 'border-radius:' + this.value+ 'px;';
}


//урок 15 rediobutton

let radio = document.getElementsByName('prim');

for (let i=0; i<radio.length; i++ ) {
    radio[i].onchange = testRadio;   
}

function testRadio(){
    console.log (this.value);
}

document.getElementById('one').onclick = checkRadio;

function checkRadio(){
    let m = document.getElementsByName('prim');
    for (let i=0; i<m.length; i++){
       if (m[i].checked){
           alert(m[i].value);
           break;
       } 
    }
    }*/


//урок 16 ассоциативные массивы

 let m = {};
 let n = {
    "one" : 12,
    "hello" : "world",
    "prim" : 2000
 }
//console.log (n["one"]);
console.log (n.one);
let ppp = "hello";
console.log(n[ppp]);
let out = document.getElementById("out");
for (let key in n) {
   out.innerHTML += key + " " + n[key] + "<br>";  
}