const persona = {
    nombre : 'victor',
    apellido: 'leiva',
    edad : 19,

    nombrecompleto(){
        return `${this.nombre} ${this.apellido}`
    },

    trajes : ['traje 01', 'traje 02', 'traje 03', 'traje 04']

}

console.log(persona.nombrecompleto())
console.log(persona.trajes)
