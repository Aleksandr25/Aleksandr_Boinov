
const animals = [{ animal: 'kengaroo', weight: "45", age: 10, status: "healcy", warden: { name: "Valera", age: 75 }}, { animal: 'lion', weight: "30", age: 20, status: "ache", warden: { name: "Vasya", age: 55 }}, { animal: 'zebra', weight: "105", age: 15, status: "hungry", warden: { name: "Vitya", age: 85 } }, { animal: 'snake', weight: "35", age: 8, status: "hungry", warden: {name: "Victor", age: 65} }]
console.log(animals)

let newAnimal = (animalNew) => {
    animals.push(animalNew)
    
}

console.log(newAnimal(animals))
function delkengaroo(delAnimal){
    delete animals [0];
}
function zoo () { 
    return {
      deleteAnimal: function(animals, name) {
      },
      changeHelth: function(status, animals) {},
      addAnimal: (animals, params) => {}
    }
  }
