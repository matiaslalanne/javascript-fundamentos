let deck =  [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

// ['2C.png','2D.png','2H.png','2S.png','3C.png','3D.png','3H.png','3S.png','4C.png','4D.png','4H.png','4S.png','5C.png','5D.png','5H.png','5S.png','6C.png','6D.png','6H.png','6S.png','7C.png','7D.png','7H.png','7S.png','8C.png','8D.png','8H.png','8S.png','9C.png','9D.png','9H.png','9S.png','10C.pn','10D.pn','10H.pn','10S.pn','AC.png','AD.png','AH.png','AS.png','grey_back.png','JC.png','JD.png','JH.png','JS.png','KC.png','KD.png','KH.png','KS.png','QC.png','QD.png','QH.png','QS.png','red_back.png'


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
    
    const carta = deck.pop(); // .pop() elimina el último elemento de un arreglo y lo retorna
    console.log(carta);
    console.log(deck);
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
console.log(valor);

