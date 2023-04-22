const intersection = (a, b, c) => {

    return a.filter((item) => b.includes(item))
}



const arr1 = [1, 2];
const arr2 = [2, 3];
// const intersection = arr1.filter(element => arr2.includes(element));
const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];
console.log(intersection(arr1, arr2)) // [2]
console.log(intersection(arr3, arr4, arr5)) // ['b']
console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']