const heroes = ['Spiderman', 'Ironman', 'Thor', 'Hulk'];

console.warn('--- Ciclo For ---');

// Recorriendo un arreglo con un ciclo for
// Inicialización; Condición; Actualización

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}   

console.warn('--- Ciclo For in ---');
// Recorriendo un arreglo con un ciclo for in
// for ( variable in objeto ) { ... }
// La variable toma el valor del índice o llave del objeto

for ( let i in heroes) {
    console.log(heroes[i]);

}
    
console.warn('--- Ciclo For of ---');

// Recorriendo un arreglo con un ciclo for of
// for ( variable of objeto ) { ... }
// La variable toma el valor del elemento del objeto    

for ( let i of heroes) {
    console.log(i);
}
