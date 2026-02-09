let getal: number = 14;
let getal2 = 14;

// getal = null; // null undefined
// getal = undefined; // null undefined

// getal2 = 'qwedrftgh';
// getal.substring(4, 8);

let tekst: string = 'qwertyu';
// tekst = null;
let tekst2 = 'qwertyu';
tekst.substring(4, 8);

let waarOfNietWaar: boolean = false;
// waarOfNietWaar = undefined;
let waarOfNietWaar2 = false;

let ohNeeHe: any = 'qwertyh'; // any schakelt effectief ALLE typechecking UIT. back to JavaScript. liefst niet tot zeer zelden gebruiken.
ohNeeHe = 12345;
ohNeeHe.substring(4, 8);

function func(p1: string | number, p2: boolean) {
	if (typeof p1 === 'string') {
		p1.substring(4, 8);
	} else {
		// p1.
	}
}

let lijstje: [number, number, number, string, ...boolean[]] = [1, 2, 3, 'qwe']; // (string | number)[]
let item = lijstje[99];

// is TypeScript een type-safe taal?
// - NOPE

let obj = {
    [Symbol.toPrimitive]() {

    },
    [Symbol.iterator]() {

    }
}