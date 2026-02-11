class Ding<T> {}

// basaal generic syntax

function doeIets<T>(x: T): T {
	return x;
}

doeIets(14);
doeIets('tkest');

class Langste<T extends { length: number }> {
	totNuToeHetLangste?: T;

	checkOfDitDeLangsteIs(value: T) {
		this.totNuToeHetLangste ??= value;

		if (this.totNuToeHetLangste.length < value.length) {
			this.totNuToeHetLangste = value;
		}
	}
}

// generics met een constraint

let langsteLijst = new Langste<number[]>();
langsteLijst.checkOfDitDeLangsteIs([1, 2]);
langsteLijst.checkOfDitDeLangsteIs([1, 2, 384, 4, 5566, 65]);
langsteLijst.checkOfDitDeLangsteIs([1, 2, 6, 5]);
langsteLijst.checkOfDitDeLangsteIs([1]);

console.log(langsteLijst.totNuToeHetLangste); // [1, 2, 384, 4, 5566, 65]

let langsteTekst = new Langste<string>();
langsteTekst.checkOfDitDeLangsteIs('hoi');
langsteTekst.checkOfDitDeLangsteIs('doei');
langsteTekst.checkOfDitDeLangsteIs('hatseflats');
langsteTekst.checkOfDitDeLangsteIs('heuj');

console.log(langsteTekst.totNuToeHetLangste); // hatseflats

// generics in functies definieren

class Generator<T> {
	value: T;
	readonly func: (value: T) => T;

	constructor(initialValue: T, mijnNaampjeVoorEenFunctie: (value: T) => T) {
		this.value = initialValue;
		this.func = mijnNaampjeVoorEenFunctie;
	}

	next() {
		this.value = this.func(this.value);
	}
}

let genGetallen = new Generator(0, huidigeValue => ++huidigeValue);
genGetallen.next();
genGetallen.next();
genGetallen.next();

console.log(genGetallen.value); // 3

let genPuntjes = new Generator('', huidigeValue => `${huidigeValue}.`);
genPuntjes.next();
genPuntjes.next();
genPuntjes.next();

console.log(genPuntjes.value); // ...

// this.http.get<Product[]>('api/product')

//

function spyOn<T extends object, K extends keyof T>(targetObj: T, methodName: T[K] extends Function ? K : never) {
	// targetObj[methodName] = () => {};
}

let obj = {
	getal: 42,
	doe() {},
};
spyOn(obj, 'doe'); // prima

// spyOn(obj, 'getal'); // niet prima: getal is geen functie
// spyOn(42, 'toExponential'); // niet prima
// spyOn(obj, 'doeslkdfjdslkf'); // niet prima


describe('qq', () => {
	it()
})