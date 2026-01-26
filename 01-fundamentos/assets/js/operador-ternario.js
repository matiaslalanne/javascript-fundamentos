/**
* Dias de la semana abrimos a las 11,
pero los findes abrimos a las 9´
 */

//Entra a un sitio web, para consultar si esta abierto hoy...

const dia = 1; // 0 es domingo, 1 lunes y demas

const horaActual = 11;

let horaApertura;
let mensaje; // Esta abierto, Esta cerrado, hoy abrimos a las xx

// // if (dia === 0 || dia === 6) {
// if ([0,6].includes(dia)) {
//     console.log('Fin de Semama');
//     horaApertura = 9;
// } else{
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

horaApertura = ([0,6].includes(dia)) ? 9 : 11;

// if (horaActual >= horaApertura) {
//     mensaje = 'Esta bierto'
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}` 
// }

mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;


console.log({horaApertura, mensaje});