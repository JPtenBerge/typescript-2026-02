
// interfaces in TS geven een naam aan de beschrijving van hoe een object eruit moet zien

class Ding {
    materiaal: 'hout' | 'metaal' | 'kussens' = 'metaal';

    doe() {}
}

interface Product extends Ding { // bestaat niet in JS
    naam: string;
    prijs: number;
}

interface Product {
    kleur: string;
}

// class Huh implements Product {
// }

let haarborstel: Product = {
    naam: '',
    prijs: 2,
    materiaal: 'kussens',
    kleur: 'blauw',
    doe() {}
};

// builder.Services.AddTransient<ICarService, CarService>();

// export class App implements OnInit {
//     ngOnInit() {
        
//     }
// }

interface Aaaa { getal: number; }
interface Bbbb { getal: number; }

let a: Aaaa = { getal: 14 };
let b: Bbbb = { getal: 28 };

a = b; // structural typing

