// Cuando aparecen los {} es porque es un objeto

const personaje = {
    nombre:'Tony Stark',
    codeName:'Ironman',
    vivo: false,
    edad: 40,
    coords:{
        lat:34.034,
        lng:-118.70,
    },
    trajes:['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War',
}
console.log(personaje);
console.log('Nombre', personaje.nombre);    //son 2 formas distintas de llegar a la propiedad del objeto
console.log('Nombre', personaje['nombre']);
console.log('edad', personaje['edad']);
console.log('Lat', personaje.coords.lat);

//Ejercicio: Numero de trajes que tiene Ironman

console.log('La cantidad de trajes son:', personaje.trajes.length);
console.log('El utlimo traje es:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);
console.log('Última pelicula:', personaje["ultima-pelicula"]);

//Mas detalles

delete personaje.edad


personaje.casado = true
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje)

personaje.dinero = 100000000;


personaje.direccion.ubicacion= 'Costa Rica'
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const values = Object.values(personaje);

console.log(propiedades, values);

