let deck =  [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0;
let puntosComputadora = 0;


//Referemcia a HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');
let contadorJugador = document.querySelectorAll('small')[0];
let contadorComputadora = document.querySelectorAll('small')[1];
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

// Esta función crea un nuevo deck
const crearDeck = () => {
    for(let i = 2; i <=10; i++){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }
    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp + tipo);
        }
    }
    deck = _.shuffle(deck);
    console.log(deck);

    return deck;
}

crearDeck();


// Esta función me permite tomar una carta y la retorna, sacando la última carta del deck
// Si el deck está vacío, lanza un error

const pedirCarta = () => {
    if(deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    
    const carta = deck.pop(); // .pop() elimina el último elemento de un arreglo y lo retorna;
    return carta;
}

pedirCarta()

// Esta función recibe una carta y retorna su valor numérico
// 2-10 = su valor
// J, Q, K = 10
// A = 11   
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length -1);
    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1;
}

const valor = valorCarta(pedirCarta());

// Turno de la computadora
const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        contadorComputadora.innerText = puntosComputadora;  
        const imgCarta = document.createElement('img');
        imgCarta.src = `./cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);  
        if(puntosMinimos > 21){
            break;
        }
    } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
    //Determinar el ganador
    setTimeout(() => {
        if(puntosComputadora === puntosMinimos){
            alert('Nadie Gana');
        } else if(puntosMinimos > 21){
            alert('Computadora Gana');
        } else if(puntosComputadora > 21){
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana');
        }
    }, 100);
    
}

//Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    console.log({puntosJugador});
    contadorJugador.innerText = puntosJugador;  
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `./cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21){
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador);
    } else if(puntosJugador === 21){
        console.warn('21, genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }   

});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click', () => {
    console.clear();
    deck = [];
    deck = crearDeck(); 
    puntosJugador = 0;
    puntosComputadora = 0;
    contadorJugador.innerText = 0;
    contadorComputadora.innerText = 0;
    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';
    btnPedir.disabled = false;
    btnDetener.disabled = false;
}
);

