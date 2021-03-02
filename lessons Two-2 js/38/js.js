//определение устройства
document.querySelector("#out").innerHTML = navigator.userAgent;
console.log(navigator);

if (navigator.userAgent.match("iPhone") || navigator.userAgent.match("Android") || navigator.userAgent.match("iPade")) {
    alert ("mobile");
}

else {
    alert ("desktop")
}