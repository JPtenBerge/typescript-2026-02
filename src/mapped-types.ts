type Config = {
	baseUrl: string;
	nrOfItemsPerPage: number;
	title: string;
	externSystem: {
		url: string;
		port: number;
		user: string;
	};
};
type PartialConfig = {
	[P in keyof Config]?: Config[P];
};
type AddProductForm = {
	[P in keyof Config]: FormControl<Config[P]>;
};
type PartialDeep<T> = {
	[P in keyof T]?: T[P] extends object ? PartialDeep<T[P]> : T[P];
};

function doeIets(partialConfig: PartialDeep<Config>) {
	// partialConfig.
}

doeIets({ baseUrl: '...', externSystem: {} });

interface Product {
    id: number;
	title: string;
	price: number;
}

const createProduct = (partialProduct?: Partial<Product>): Product => {
	return {
        id: 0,
		title: 'default title',
		price: 0.0,
		...partialProduct,
	};
};
createProduct();
createProduct({ title: 'Haarborstel' });
createProduct({ price: 14.5 });
createProduct({ title: 'Haarborstel', price: 24.05 });

// conditional types: ?:

type Dinges<T> = T extends object ? string : number;

let x: Dinges<{}> = 'sddsf';
let y: Dinges<string> = 42;


function postProductToBackendApi(toAddProduct: Omit<Product, 'id'>) {

}
postProductToBackendApi({ title: 'qqq', price: 344 });



let intervalId: ReturnType<typeof setInterval> = setInterval(() => {}, 1000);
//...
clearInterval(intervalId);



type Flatten<T> = T extends (infer R)[] ? R : T;

type MijnLijstje = string[];
type MijnTekstje = string;


type FlattenedLijstje = Flatten<MijnLijstje>;
type FlattenedTekstje = Flatten<MijnLijstje>;
