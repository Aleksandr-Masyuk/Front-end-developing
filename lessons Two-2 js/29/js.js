window.onload = function() {
    let scrolled;
    let timer;
    document.getElementById("top").onclick = function() {
        scrolled = window.pageYOffset;
        //window.scrollTo(0,0) //резкая  прокрутка
        scrollToTop();
    }

    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 100; //100 скорость прокрутки
            timer = setTimeout (scrollToTop, 50);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0,0);
        }
    }
}