class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  detallePersona() {
    console.log(`Nombre: ${this.nombre}\n Edad: ${this.edad}`);
  }
}

class Empleado extends Persona {
    sueldo;

    constructor(nombre, edad,sueldo){
        super(nombre, edad)
        this.sueldo = sueldo;
    }

    detallePersona(){
        super.detallePersona();
    }
}

const em1 = Empleado();
console.log(em1);

em1.detallePersona();


