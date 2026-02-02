// Problema: Código repetido al crear múltiples objetos con las mismas propiedades y métodos
// Solución: Utilizar clases para definir un molde y crear múltiples instancias

const fer = {
    nombre: 'Fernando',
    edad: 35,
    imprimir(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

const gaby = {
    nombre: 'Gabriela',
    edad: 28,
    imprimir(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}       

fer.imprimir();
gaby.imprimir();

// Solución con función constructora
function Persona (nombre, edad) {
    console.log('Se ejecuto esta linea');
    // Atributos
    this.nombre = nombre;
    this.edad = edad;
    // Métodos
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

const maria = new Persona('Maria', 18); 
const juan = new Persona('Juan', 25);

juan.imprimir();
maria.imprimir();   
