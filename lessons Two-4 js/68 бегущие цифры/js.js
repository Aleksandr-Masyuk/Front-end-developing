const time = 9000; //ms
const step = 100; //шаг

function outNum (num, elem) {
    let l = document.querySelector("#" + elem);
    n = 0;
    // не раб, исправить step == 0 ? step = 1 : step = step; //степ равен 0? если равен то присвоить 1, в противном случае степ присвоить степ
    let t = Math.round(time/(num/step));
    let interval = setInterval(()=>{
        n = n + step;
        if (n == num) {
            clearInterval(interval);
        }
        l.innerHTML = n;
    }, t); //параметры, функция и время

}

outNum(10000, "out-1");