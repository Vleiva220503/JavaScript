let pares = [],
  impares = [],
  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  nr = 0;

for (let n of numeros) {
  nr = parseInt(Math.random() * 100);
  let r = n * nr;

  if (r / 2 === 0) {
    console.log(`${n} x ${nr} = ${r}`);
    pares.push(r);
  } else {
    console.log(`${n} x ${nr} = ${r}`);
    impares.push(r);
  }
}

console.log('array de pares', pares);
console.log('array de impares', impares);

