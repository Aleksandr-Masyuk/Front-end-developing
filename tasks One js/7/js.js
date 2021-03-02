// const arr1 = [0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4]

// let removeDuplicates = function(nums) {
//     let num = new Set(arr1)
//     let mass = [...num]
//     console.log(mass);
//     for ( let i = 0; i <= mass.length; i++) {
//         console.log(mass[i]);
//     }
// }

// console.log(removeDuplicates(arr1));
// //console.log(arr1);

// аналог черкз цикл. будем перебирать массив и удалять при условии что первый элемент === второму. массив должен быть отсортирован

const arr1 = [1, 1, 2];
const arr2 = [0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4];

let removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1); // i позиция с котрой начинаем удалять, 1 количество элементов удаления
      i--;
    }
  }
  return nums.lenght;
};

console.log(removeDuplicates(arr1));
console.log(arr1);

console.log(removeDuplicates(arr2));
console.log(arr2);
