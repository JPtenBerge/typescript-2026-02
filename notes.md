# Notes

## Waarom TypeScript? wat is er mis met JavaScript?

- alles?
- JS is niet strongly-typed
- JS geeft minder typezekerheid
- TS geeft meer/betere autocomplete-support

Compilers/transpilers

transpiler   brontaal hetzelfde is als outputtaal
- van JS naar Rust?

## Node.js folder als projectfolder wil inrichten

Met npm:
- `npm init geeft je een package.json`
- `npm install typescript --save-dev`
- `npx tsc mijn-bestand.ts`

Met pnpm:

- pnpm
  - performant npm
  - pnpm init voor de `package.json`
- `pnpm install typescript --save-dev`
- `pnpm exec tsc mijn-bestand.ts`

yarn:

- geen idee, succes!

[Waarom pnpm](https://pnpm.io/motivation): performance, efficienter omgaan met hardeschijfruimte, security.

## Node vs Deno vs Bun

Node
- begon in 2009
- gemaakt door Ryan Dahl
- laatste tijd regelmatig supply-chain attacks

Deno
- begon in 2020
- gemaakt door Ryan Dahl
- veiligere package manager
- security++
  - `deno run --allow-net --allow-read C:/temp ./bla.ts`
- TypeScript
- v1 was niet compatible met npm packages
  - v2 wel!
    ```js
    import {} from 'npm:...';
    ```

Bun
- veiligere package manager
- performance
- TypeScript
- $$$ venture capitalism
- 2022


## Variable declaration

- `var` - lexical scope, hoisting applies
  - zoveel mogelijk mijden
- `let`/`const` block scope
  - zoveel mogelijk gebruiken 👍
- obscure manieren, hebben zeker niet de voorkeur:
  - `x = 14;` zonder `var`/`let`/`const`, maakt een property aan op het globale object en wordt daarmee een globale variable
  - `globalThis.x = 14;` maakt expliciet een property aan op het globale object en wordt daarmee een globale variable

## Returnwaarde expliciet opnemen bij methoden?

Is niet vereist, TypeScript kan het prima afleiden aan de hand van wat je daadwerkelijk retourneert:

```ts
const doe = () => {
  return 'werkt!'; // doe() returns string
};
```

Maar kan wel handig zijn bij grotere functies met meerdere `if`-/`for`-statements om zeker te weten dat je het juiste retourneert.

Ook kan `:void` handig zijn om te voorkomen dat je iets retourneert waar vervolgens niemand iets mee doet.

```ts
export class HomeComponent {
	ngOnInit(): void {
		return 14; // nope! Angular doet niks met de returnwaarde van ngOnInit()
	}
}
```

## Generics

- veralgemenizering
- het abstraheren van een class/functie voor meerdere typen
- bestaan niet in JavaScript

Vitest's [`spyOn()`](https://vitest.dev/guide/mocking) is een interessante generic function!

```ts
function spyOn<T extends object>(targetObj: T, methodName: keyof T) {
    // targetObj[methodName] = () => {};
}

let obj = {
    getal: 42,
    doe() { }
};
spyOn(obj, 'doe'); // prima

spyOn(obj, 'getal'); // niet prima: getal is geen functie
// spyOn(42, 'toExponential'); // niet prima, 42 is geen object
// spyOn(obj, 'bestaatNiet'); // niet prima, "bestaatNiet" is geen property van obj
```

Vanuit C#/Java is dit niet iets waar we generics voor inzetten. Het _lijkt_ niet typesafe, maar is het dus wel (mits goed toegepast natuurlijk).

## Coole links

- [State of JS survey 2025 is "uit"!](https://2025.stateofjs.com/en-US)
- Hoisting leek gewoon een eigenaardig iets van `var`, maar zowaar zowaar, [Vitest past hoisting ook toe met `vi.mock()`](https://vitest.dev/guide/mocking)
- [Proposal Type Annotations](https://github.com/tc39/proposal-type-annotations)
