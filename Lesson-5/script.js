// 1 task
let fill = (number, text) => {
    let result = [];
    for (let i = 0; i < number; i++) {
        result.push(text)

    }
    return result;
}

console.log(fill(5, 'b'))
// 1.1 task
const fill2 = (arraySize, value) => {
    let newArr = new Array(arraySize);//пустой массив с забронированными местами
    return newArr.fill(value);
}

const newFill = 3;
const valueToFill = 'a';
console.log(fill2(newFill, valueToFill))

// 2 task

const deistvie = (array) => {
    return array.filter((elem) => {
        if (elem) { return elem; }
    });
}
const data = [0, 1, false, 2, undefined, '', 3, null];

console.log(deistvie(data))
//
let usersAge = {
    ivanov: '19',
    petrov: '17',
    sidorov: '21'
}
let adultAge = [];
let youngAge = [];
let namesArray = Object.keys(usersAge);//создаем масиив из ключей обьекта
namesArray.forEach((element) => { //перебираем массив
    let result = { name: element, age: usersAge[element] }//создаем обьект по ключу для условия
    if (usersAge[element] >= 18) {
        adultAge.push(result)
    } else { youngAge.push(result) }
})
console.log(adultAge);
console.log(youngAge);

