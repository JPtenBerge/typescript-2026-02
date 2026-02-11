// typen functies - variance

let func1: (getal: number) => number = getal => 14;
let func2: (getal: number, tekstje: string) => number = (getal, tekst) => 28;

func1 = func2; // JA
func2 = func1; // JA NEE

[1, 2, 3].forEach(value => console.log(value));

// unknown
let mijnAny: any;
let mijnUnknown: unknown; // any maar dan met een mooi woord

mijnAny.func();
mijnAny * 5;
mijnAny + 'kljds';

// mijnUnknown.func();

if (typeof mijnUnknown === 'number') {
	// type guard
	mijnUnknown * 5;
}
mijnUnknown + 'kljds';

// eventMock = { click: 42 } as unknown as Event;

// (mijnService as unknown as any)
// (mijnService as unknown as MijnService)

// 4 type guards:
// - typeof mijnUnknown
// - if ('prop' in mijhnObj) { mijnObj.prop }
// - instanceof MijnClass
// - Array.isArray()

function isBird(obj: unknown): obj is Bird {
	return !!obj && typeof obj === 'object' && 'flap' in obj;
}

function assertBird(obj: unknown): asserts obj is Bird {
	if (!obj) throw new Error('Geen bird');
	if (typeof obj === 'object' && 'flap' in obj) throw new Error('Geen bird');
}

interface Bird {
	aantalOgen: 2;
	flap(): void;
}

let bird: unknown = {
	aantalOgen: 2,
	flap() {},
};

// if (isBird(bird)) {
// 	// custom type guard
// 	bird.flap();
// } else {
// 	bird;
// }

assertBird(bird);
// bird

// this.http.get<Product[]>('api/products').pipe(tap(p => assertProducts(p))).subscribe(products => { /* ... */ })

// type guards
// type narrowing

// intersection types

// let x: 'hoi' | 'doei' | 'huh';
// let y: Person | Employee | Teacher;
let z: ProductEntity & { isSelected: boolean };

interface ProductEntity {
	title: string;
	price: number;
}
// interface ProductUiAchtigeDingen { isSelected: boolean; }

let query: QuerySuccess<string[]> | QueryError = {} as any;

type QuerySuccess<T> = {
	isSuccess(): this is QuerySuccess<T>;
    data: T;
}
type QueryError = {
	isSuccess(): this is never;
    data: never;
}

if (query.isSuccess()) {
    query.data
}
else {
    
}

interface Product { title: string; }

let productsDict = {
    mouse: { title: 'Computer mouse' },
    keyboard: { title: 'Computer keyboard' },
    monitor: { title: 'Computer monitor' },
} satisfies { [prop: string]: Product };


// let arr = ['hoi', 'doei'] as const;

console.log(productsDict.monitor.title);


// type vs interface?
// - beide bestaan niet in JS
// - type = interface++ - conditional / mapped keyof
// - interface oogt bekender, is simpeler
