// ?? || &&

// ?? nullish coalescing operator - null / undefined
// || of   een beetje hetzelfde - null / undefined / '' / false / 0 / NaN / 0n / -0   - falsey values

let person = { name: undefined, age: 39 };
console.log(person.name || 'onbekend');


let bla: null | number = null;
// bla!.toExponential();

// if (!verdieping) {
//     // toon validatiemelding
// }


let laatste = false && 8;
console.log(laatste);

// Svelte
// <input on:keydown={e => e.key === 'enter' && doeIets()}>


// Angular
// <input (keydown.enter)="doeIets()">