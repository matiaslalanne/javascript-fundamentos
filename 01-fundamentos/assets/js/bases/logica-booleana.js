const regresaTrue = () => {
  console.log('Regresa true');
  return true
}
const regresaFalse = () => {
  console.log('Regresa false');
  return false
}

console.warn('Not o la negacion');
console.log(true); //true
console.log(!true); //false
console.log(!false); //true

console.log( !regresaFalse() );

console.warn('And') // true si todos los valores son verdaderos
console.log(true && true); //true
console.log(true && !false); //true
console.log(false && false); //false

console.log('=======');
console.log(regresaFalse() && regresaTrue()); //si esta el operadon AND y la primera es falsa, no continua con las funciones
console.log(regresaTrue() && regresaFalse()); // aca como la primera es true, si resuelve ambas, y el resultado de AND

console.log('=== && ====');
regresaFalse() && regresaTrue();
console.log('4 condiciones', true && true && true && false); // false

console.warn('OR ') // true

console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());
console.log(regresaTrue() || regresaFalse());


console.log('4 condiciones', true || true || true || false); //true

console.warn('Asignaciones');

const soyUndefined = undefined
const soyNull = null
const soyFalse = false

const a1 = true && 'Hola mundo'
const a2 =  'Hola' && 'Mundo' && soyFalse
const a3 = soyFalse || 'Ya no soy falso';
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso' ||true;
const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy falso' ||true;

console.log({a1, a2, a3, a4, a5});

if (true || true || true || false) {
    console.log('Hacer algo');
} else {
    console.log('Haer otra cosa');
}


