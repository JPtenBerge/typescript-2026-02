
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

interface Aaaa { getal: number; tekstje: string }
interface Bbbb { getal: number; }

let a: Aaaa = { getal: 14, tekstje: 'qw' };
let b: Bbbb = { getal: 28 };

a = b as Aaaa; // structural typing
b = a;


interface Dictionary {
    [prop: string]: number;
}

let tellertjes: Dictionary = {};

let tekstje = 'hallo ik ben jp en ik geef training vandaag';
for (let character of tekstje) {
    tellertjes[character] ??= 0;
    tellertjes[character]++;
}

console.log(tellertjes['b']);
// console.log(tellertjes.b);


interface Bla {
    get(query: string): string;
    get(element: HTMLElement): number;
}

// jQuery
// $('div');
// $('<div>')
// $(function() { }) // dom ready

interface Cypress {
    should(str: 'have.text'): boolean;
    should(str: 'have.count'): boolean;
    should(str: 'includes.text'): boolean;
    // should(str: 'have.not.text'): boolean;
    // should(str: 'have.text'): boolean;
}

let cy: Cypress = {
    should(str: 'have.text' | 'have.count' | 'includes.text') {
        
        return true;
    },
    
    
};
// cy.should()