autoSlider ();
autoSlider2 ();
autoSlider3 ();
autoSlider5 ();
autoSlider5 ();
let left = 0;
let timer = 100;

function autoSlider () { 
    ttimer = setTimeout (function () {
        let polosa = document.getElementById('polosa');
        left = left - 500;
        if (left < -1200){
            left = 0;
            clearTimeout(timer);
        }
        polosa.style.left = left +'px';
        autoSlider ();
    }, 2000);
}

autoSlider2 ();
function autoSlider2 () { 
    ttimer = setTimeout (function () {
        let polosa = document.getElementById('polosa2');
        left = left - 500;
        if (left < -1200){
            left = 0;
            clearTimeout(timer);
        }
        polosa.style.left = left +'px';
        autoSlider2 ();
    }, 2000);
}

autoSlider3 ();
function autoSlider3 () { 
    ttimer = setTimeout (function () {
        let polosa = document.getElementById('polosa3');
        left = left - 500;
        if (left < -1200){
            left = 0;
            clearTimeout(timer);
        }
        polosa.style.left = left +'px';
        autoSlider3 ();
    }, 2000);
}

autoSlider4 ();
function autoSlider4 () { 
    ttimer = setTimeout (function () {
        let polosa = document.getElementById('polosa4');
        left = left - 500;
        if (left < -1200){
            left = 0;
            clearTimeout(timer);
        }
        polosa.style.left = left +'px';
        autoSlider4 ();
    }, 2000);
}

autoSlider5 ();
function autoSlider5 () { 
    ttimer = setTimeout (function () {
        let polosa = document.getElementById('polosa5');
        left = left - 500;
        if (left < -1200){
            left = 0;
            clearTimeout(timer);
        }
        polosa.style.left = left +'px';
        autoSlider ();
        autoSlider2 ();
        autoSlider3 ();
        autoSlider4 ();
        autoSlider5 ();
    }, 2000);
}

