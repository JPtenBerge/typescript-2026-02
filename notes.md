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

## Coole links

- [State of JS survey 2025 is "uit"!](https://2025.stateofjs.com/en-US)
