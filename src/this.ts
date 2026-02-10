let obj = {
	name: 'JP',
	speak() {
		console.log('this:', this);
		console.log('ik heet ' + this.name);
	},
};

let speakFunctie = obj.speak;

// this binden  .bind() .call() .apply()

speakFunctie.call({ name: 'Justin' });
// handleClick.call({ name: 'Justin' });

// export class HomeComponent {
// 	products: Product[];

// 	constructor(http: HttpClient) {
// 		http.get('api/products').subscribe(products => {
// 			this.products = products;
// 		});
// 	}
// }

let btn = document.getElementById('input')! as HTMLInputElement;
btn.addEventListener('click', function () {
	// 	console.log('this:', this);
});

// extension methods
// public static class MijnExtensions {
// 	public static void DoeIets(this IEnumerable<T> lijst) {

// 	}
// }

function handleClick(this: HTMLButtonElement) {
	console.log('this:', this);
}

// obj.speak();
