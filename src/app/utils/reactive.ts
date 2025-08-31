let x = 5;
let y = 10;
let z = x + y;
console.log('Initial z:', z);
x = 20;
console.log('Updated z:', z);

import { computed, signal } from '@angular/core';

let x1 = signal(5);
let y1 = signal(10);
let z1 = computed(() => x1() + y1());
console.log('Initial z1:', z1());
x1.set(20);
console.log('Updated z1:', z1());

