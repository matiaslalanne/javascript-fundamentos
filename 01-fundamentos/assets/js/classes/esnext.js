/*class Rectangulo {
    #area = 0;
    // Propiedad privada
  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;

    this.#area = base * altura;
  }
  calcularArea() {
    console.log(this.#area * 2);
}
}

const rectangulo = new Rectangulo(10, 5);
// rectangulo.#area = 100;
rectangulo.calcularArea();
console.log(rectangulo);
*/

class CuentaBancaria {

  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(monto) {
    this.saldo += monto;
  }

  retirar(monto) {
    if (monto > this.saldo) {
      console.log('Fondos insuficientes');
      return;
    }
    this.saldo -= monto;
  }

  verSaldo() {
    return this.saldo;
  }

  mostrarInfo(){
    console.log(`Titular: ${this.titular} - Saldo: ${this.saldo}`);
  }

}

const cuentaMatias = new CuentaBancaria('Matías', 1000);

cuentaMatias.depositar(500);
console.log(cuentaMatias.verSaldo()); // 1500

cuentaMatias.retirar(300);
console.log(cuentaMatias.verSaldo()); // 1200

cuentaMatias.mostrarInfo(); // Titular: Matías - Saldo: 1200

