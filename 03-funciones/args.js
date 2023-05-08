function sumar(...args){
    let suma = 0;
    for(let n of args){
        suma += n;
    }

    return suma;
}

const s = sumar(40,90,40,90);
console.log(s);