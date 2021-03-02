let p = document.createElement("p");
//дабавить элемент Р после бади
document.body.insertBefore(p, document.querySelector("#out"));


p.innerHTML = "primer";
p.classList.add("main", "green");

//дабавил элемент Р
//document.body.appendChild(p);

document.body.insertBefore(p, document.querySelector("#out"));

console.log(p);