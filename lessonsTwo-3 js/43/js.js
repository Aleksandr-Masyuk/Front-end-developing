let c = "((()))()";
// длина строки lenght
console.log(c.length);
let count = 0;

for (let i = 0; i < c.length; i++) {
    //console.log(c[i]);
    if (c [i] == "(") {
        count++;
    }
    if (c [i] == ")") {
        count--;
    }
    if (count < 0) {
        console.log(false);
        break;
    }
}

if (count != 0) console.log(false);
else console.log(true);





console.log(count);