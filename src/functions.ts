



// function bla() {
//     console.log('bla 2');

//     const iets = 'q';
// }
function bla(p1?: number, p2: string = 'qqw', ...rest: (number | string)[]) {
    console.log('bla met params', p1, p2);
}

bla();
bla(123);
// bla(14, '28', 4354,435 ,34534,'hoi', 'q' , {}, []);

const arrow = () => {}; // korter. makkelijker. this voorspelbaarder. minder vage dingen: prototypes, arguments
// arrow = () => {}; // korter. makkelijker.

let lijstje1 = [1,2,3];
let lijstje2 = [4,5,6];
let combineerd = [...lijstje1, ...lijstje2];
console.log('combineerd:', combineerd);

let obj1 = { x: 24, y: 42 };
let obj2 = { y: 'hoi' };
let bijElkaar = { ...obj1, ...obj2 }; // objecten clonen
console.log(bijElkaar);

// manieren om een object clonen:
// - structuredClone() // deep copy
// - { ...obj } // shallow copy
// - JSON.parse(JSON.stringify(obj)) // deep copy

let obj = { x: 234, func: () => {} };
console.log(JSON.parse(JSON.stringify(obj)));


// factory method

// const createProduct = (product?) => {
//     return {
//         title: '',
//         price: 0,
//         ...product
//     }
// };

