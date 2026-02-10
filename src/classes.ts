

class Human {
    readonly name: string;
    protected age: number; // compile-time private
    #age: number; // runtime private

    static nrOfPersons = 0;

    constructor(name: string, age: number) {
        Human.nrOfPersons++;

        this.name = name;
        this.age = age;
        this.#age = age;
    }

    speak() {
        this.name = 'ddsa';
    }

    get birthYear() {
        return 1998;
    }
    set birthYear(value: number) {
        if (value < 1900) throw new Error('geen geldig jaartal zo');

        // ...
    }
}

class Accountant extends Human {
    doeBelastingaangifte() {
        // this.age
    }
}


let jp = new Human('JqwertyP', 39);
console.log(jp.name);
console.log(jp.birthYear)
// console.log(jp.age);
// console.log((jp as any).#age);


// public = de hele wereld kan erbij
// private = alleen de class zelf kan erbij
// protected = de class en alle subclasses kunnen erbij

// Object.defineProperty(jp, 'birthYear', { 
//     get() { },
//     set() { },
// })