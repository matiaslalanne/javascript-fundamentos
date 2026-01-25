function saludar(nombre) {
    console.log(arguments);
    console.log('Hola ' + nombre);
    return 1; //Hasta ahi llega la funcion

    console.log('Soy u codigo que esta despues del retunr'); //Esto nunca se va a ejecutar
}

const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
}

// saludar()

// Esta es la funcion que mas se usa, la funcion de flecha
const saludarFlecha = () => {
    console.log('Hola Flecha');
}
const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}


const retornoDeSaludar = saludar('Matute', 40, true, 'Argentina')
console.log(retornoDeSaludar);
// saludar2('Matulin')

saludarFlecha()
saludarFlecha2('flechita')

// Ejercicios

function sumar(a,b) {
    return a + b
}

const sumar2 =(a,b) => {
    return a+b;
}

//Podria tambien simplificarse asi
// const sumar3 =(a,b) => a+b;

console.log(sumar(1,2));
console.log(sumar2(3,2));

function getAleatorio () {
    return Math.random()
};


// console.log(getAleatorio());

// Transformar en una funcion de flecha, que no tenga llaves {}, que se va a llamar getaleatorio2

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());

