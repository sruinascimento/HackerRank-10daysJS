function Rectangle(a, b){
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;
}

const rec = new Rectangle(4, 5);
console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area);


//========================================

// const arr = ["Rui", "Nara", "Vini", "Danilo", "Brendo"];

// for (let i = 0; i < arr.length; i++) {
//     console.log(`array [${i}] = ${arr[i]}`);
// }

// const o = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
// };

// for (let propertie in o) {
//     console.log(`>>>> ${propertie} = ${o[propertie]}`);
// }
//passados 3 parâmetros, serão: valor, índice e array
// arr.forEach((value, index, array) => {
//     console.log(`>>>> Index: ${index} --> Value: ${value}`);
//     console.log(`>>>> ${[index]} --> ${array[index]}`);
// );
//passados 2 parâmetros, serão: valor e índice
// arr.forEach((v, i) => console.log(`>>>> ${i} : ${v}`));
//passado somente 1 porâmetro será o valor
// arr.forEach(v => console.log(`>>>> ${v}`));

// const numbers = [10, 23, 55, 76];
// let accumulator = 0;
// numbers.forEach(v => console.log(`>>>> ${v} : ${accumulator += v}`));
// console.log(accumulator);

function getCount(objects) {
    let acc = 0;
    objects.forEach(e => e.x === e.y ? acc += 1: false);
    return acc;
}
const objects = [
    {x: 5, y: 5},
    {x: 7, y: 8},
    {x: 1, y: 1}
]
console.log(getCount(objects));

//classe Polygon que retorna o perimetro

class Polygon {
    constructor(arr) {
        this.sides = arr;
    }

    perimeter() {
        let perimeter = 0;
        this.sides.forEach(v => perimeter += v);
        return perimeter;
    }
}

let triangle = new Polygon([3, 4, 5]);
console.log(">>>> Perimeter: ", triangle.perimeter());