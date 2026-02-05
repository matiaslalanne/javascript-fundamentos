// El singleton es un patrón de diseño que restringe la instanciación de una clase a un solo objeto.
// Esto es útil cuando solo se necesita un objeto para coordinar acciones en todo el sistema.

class Singleton {
    // Propiedad estática para almacenar la instancia única
    static instancia; // undefined por defecto
    nombre = '';

    // Constructor privado para evitar la creación directa de instancias
    constructor(nombre = '') {

        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;

        // return this;


}
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Hulk');


console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`);