function saludar(nombre) {
  //console.log('Hola, desde la funcion');
  //console.log(`Hola, ${nombre} desde la funcion`)
  return `Hola, ${nombre} desde la funcion`;
}
function sumar(a = null, b = null) {
  if (a === null || b === null) {
    console.log("Ingrese dos valores");
    return;
  }
  return a + b;
}
/*const s = saludar('Victor');
const r = saludar('Manuel');

console.log(r)
console.log(s);*/

const s = sumar( 4 + 5);
console.log(s);
