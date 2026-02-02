// Definición de la clase
//  Las clases en JavaScript son plantillas para crear objetos.
// Utilizan la palabra clave 'class' seguida del nombre de la clase.


class Persona {
    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase; 
    }
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}

const spiderMan = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironMan = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

console.log(spiderMan);
console.log(ironMan);

spiderMan.quienSoy();
ironMan.quienSoy();
spiderMan.miFrase();
ironMan.miFrase();