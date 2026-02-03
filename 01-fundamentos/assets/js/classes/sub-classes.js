class Persona {

    
    static _conteo = 0;
    // Getter estático, no se puede usar con this, se usa con la clase
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log(this.nombre);
        console.log('Hola a todos, soy un método estático');   
    }

    // Declararlo aca, es opcional
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase; 
        // Incrementar el conteo cada vez que se crea una nueva instancia
        Persona._conteo++;
    }
    // Setters y Getters
    // Los setters y getters son métodos especiales que permiten establecer y obtener valores de propiedades de una clase de manera controlada.
    set comidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get comidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}

// Subclase de Persona, hereda de Persona, usa la palabra reservada extends, para heredar todo lo de Persona.
class Heroe extends Persona {
    clan = 'Sin clan';
    constructor(nombre, codigo, frase) {
        // Llamar al constructor de la clase padre, previo al uso de this.
        super(nombre, codigo, frase);
        this.clan = 'Los Avengers';
    }

    quienSoy() {
        console.log(`Soy ${this.nombre}, del clan ${this.clan}`);
        super.quienSoy();
    }

}

// const spiderMan = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const spiderMan = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
console.log(spiderMan);
spiderMan.quienSoy();




