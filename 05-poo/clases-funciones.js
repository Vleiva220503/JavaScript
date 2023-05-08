function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = function () {
    console.log(`${this.nombre} ${this.edad}`);
  };
}

const p1 = new Persona('victor', 19);
const p2 = new Persona('manuel', 19)

console.log(p1.edad)
console.log(p2.nombre)