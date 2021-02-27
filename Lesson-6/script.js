//1 task 
const unique = (array) => {
    return Array.from(new Set(array))
}

const data = [1, 2, 1, 2, 3, 4, 5, 7, 4, 6, 4];
console.log(unique(data)); // [1, 2, 3]
// 1.1 task
const uniQue = (array1) => {
    return array1.filter((elem, index) => {
        return array1.indexOf(elem) == index;
    })


}
const daTa = [1, 2, 1, 2, 3, 4, 5, 7, 4, 6, 4];
console.log(uniQue(daTa)); // [1, 2, 3]
//2 task

const isEqual = (firstArray, secondArray) => {
    let result = true;
    if (firstArray.length == secondArray.length) {
        firstArray.forEach((element, index) => {
            if (element == secondArray[index]) {
                result = true;
            } else { result = false; }
        })
    } else { result = false; }
    return result;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false
// 3 task

 const reverse = (array) => {
    let reverseMassive = [];
    array.forEach((element1) => {
        reverseMassive.unshift(element1)
    })
   return reverseMassive
   } 
const reverse = (array) => {
    let reverseVassive = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverseVassive.push(array[i]);
    }
    return reverseVassive
}

const datA = [1, 2, 3];
console.log(reverse(datA)); // [3, 2, 1]