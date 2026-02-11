let e: Employee | Employer = {} as any;

type Employee = {
	type: 'employee';
	iban: string;
};
type Employer = {
	type: 'employer';
	kvk: number;
};

if (e.type === 'employee') {
	e.iban;
}

let b: unknown;
let c: never;

type Move = 'walk' | 'swim' | 'breathe' | 'swing' | 'jump';

function processMove(move: Move) {
	switch (move) {
		case 'walk':
			return 14;
		case 'swim':
			return 94;
		case 'breathe':
			return 94;
		case 'swing':
			return 94;
		default:
			handleError(move);
	}
}

processMove('jump');

function handleError(unknownNode: never) {
	throw new Error('Unforeseem circumstances');
}

// function mandatory(): never {
//     throw new Error('wow!');
// }

// let obj = {
// 	doe(p1: string = mandatory()) {},
// };
// (obj as any).doe();
// doe();

// console.log(b);
// console.log(c.toString());

// parseInt(c);

// never



interface Product { title: string; price: number }

type KeysVanProduct = keyof Product;

let bla: KeysVanProduct = 'price';
