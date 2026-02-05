// Constructor múltiple usando un método estático
// Permite crear instancias de la clase de diferentes maneras

class Persona {

    static porObjeto({ nombre, apellido, pais }) {
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`Info: ${this.nombre} ${this.apellido} es de ${this.pais}`);
    }
}

const nombre1 = 'Melisa',
      apellido1 = 'Gomez',
      pais1 = 'Argentina';

const fer = {
    nombre: 'Fernando',
    apellido: 'Herrera',
    pais: 'Chile'
};  

const persona1 = new Persona(nombre1, apellido1, pais1);
persona1.getInfo();

const persona2 = Persona.porObjeto(fer);
persona2.getInfo();