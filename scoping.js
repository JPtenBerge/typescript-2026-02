var eerste = 'hoi'; // overal aanpassen?
let tweede = 'aha'; // alleen binnen deze functie?

// block scope / lexical scope

// console.log('i voor de for:', i);

// for (let i = 0; i < 5; i++) { // hoisten
// 	console.log('i:', i);
// }
// console.log('i na de for:', i);

const derde = { title: 'wow' }; // niet toekenning
derde.title = 'iets anders';
console.log(derde);

function func1() {
	globalThis.x = 2345;
	console.log(x);
}
function func2() {
	console.log(x);
}
func1();
func2();

// globale object
// - browser: window
// - node/deno/bun: global
// - beide: globalThis

// parseInt()
// parseFloat()

// window.parseInt()
// window.parseFloat()



