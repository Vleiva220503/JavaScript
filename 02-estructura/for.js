let n = 5, leer;

for(let i = 0; i <= 10; i++){
    leer = `${n} x ${i} = ${n * i}`;
    console.log(leer);
}

let texts = 'JavaScript';
let estudiante = ['victor','manuel','leiva','requene'];

for(let dato in texts){
    console.log(dato);
}
for(let dato of estudiante){
    console.log(`Hola: ${dato}`);
}