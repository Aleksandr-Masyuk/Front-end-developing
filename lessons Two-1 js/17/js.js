// let m = [4, 12 , "hello"];
// console.log(m);

let m = {};
let n = {
    "one" : 12,
    "hello" : "world",
    "prim" : 2000,
    "double key" : 777
};

n.one = 9000;

console.log(n["one"]);
console.log(n.hello);
console.log(n["double key"]) // обращение с точной не работатет из-за пробела

let ppp = "hello";
n.ppp //ошибка
console.log(n[ppp]);
let out = document.getElementById ("out");
for (let key in n) {
    out.innerHTML+= key + "----" +n[key]+ "<br>";
}
