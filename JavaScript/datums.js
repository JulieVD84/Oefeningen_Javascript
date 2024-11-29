"use strict";
"use strict";
const datum = new Date();
console.log(datum.getFullYear());
console.log(datum.getMonth());
console.log(datum.getDate());
console.log(datum.getDay());
console.log(datum.toLocaleDateString("nl-BE"));

const datum2 = new Date(1988, 8, 7);
// Dag van de week
console.log(datum2.getDay());

// Dag van de maand
console.log(datum2.getDate());




