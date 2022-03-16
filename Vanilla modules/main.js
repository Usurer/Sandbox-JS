import * as helpers from './helpers.js'

const { of } = rxjs;
const { filter, map } = rxjs.operators;

console.log(`Hello ${helpers.YEAR}`);

let of$ = of('rxjs');
of$.subscribe({
    next: x => console.log(`Hello from ${x}!`)
});