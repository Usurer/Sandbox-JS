import * as helpers from './helpers.js';
import { of } from 'rxjs';

console.log(`Hello ${helpers.YEAR}`);

let of$ = of('rxjs');
of$.subscribe({
    next: x => console.log(`Hello from ${x}!`)
});