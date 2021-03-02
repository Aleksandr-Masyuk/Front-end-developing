let m = [];
let ml = [99, 33, "hello"];

ml[3] = "world";
ml[4] = 444444;

//alert(ml.length);

// for (let i=0; i<ml.length; i++) {
//     document.getElementById("out").innerHTML += ml[i] +"<br>";
// }

function masOut() {
    let p = document.getElementById("out");
    let str = " ";

    for (let i = 0; i < ml.length; i++) {
        str += i + " --- " + ml[i] + "<br>";
    }
    p.innerHTML = str;
}

masOut();


function p1() {
    let i1 = document.getElementById ("i1").value;
    ml.push(i1);
    masOut();
}

function p2() {
    ml.pop();
    masOut();
}
