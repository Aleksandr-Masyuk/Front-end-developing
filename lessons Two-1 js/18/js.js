// let man = {
//     "name" : "Alex",
//     "age" : 67,
//     "id" : "32242325",
//     "sex" : "male"
// };
// console.log (man);
// console.log (man["name"]);
// console.log (man.name);
// let a = "name";
// console.log (man[a])


// let man2 = {
//     "name" : "Alex",
//     "age" : 67,
//     "id" : "32242325",
//     "sex" : "male",
//     "year" : function() {
//         return 2020-this.age;
//     }
// };

// console.log (man2.year() );


let m = {
    "mas" : [5, 6, 34, 12, 45],
    "sum" : function() {
        let sum = 0;
        for (let i=0; i<this.mas.length; i++){
            sum = sum + this.mas[i];
        }
        return sum;
    }
}

console.log (m.sum());


