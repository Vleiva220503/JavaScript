class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  imprimir() {
    console.log(this.nombre, this.edad);
  }
}

const p1 = new Persona("ma", 20);
console.log(p1);
