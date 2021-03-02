function f1() {
    let p, p1;
    p = document.getElementById ("out");
    p1 = document.getElementById ("out1");

    //цикл с пред условием
    let i = 0;
    while (i < 50) {
        i++;
        p.innerHTML +=i+' ';
        
    }

    //цикл с пост условием
    let j = 100;
    do {
        j--;
        p1.innerHTML += j + ' ';
    }

    while (j > 0);

}