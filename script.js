let sequencia = [];
let sequenciaClicada = [];
let Pontos = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const AZUL = document.querySelector('.blue');
const VERMELHO = document.querySelector('.red');
const VERDE = document.querySelector('.green');
const AMARELO = document.querySelector('.yellow');

//cria ordem aletoria de cores
let Sortear = () => {
    let colorsequencia = Math.floor(Math.random() * 4);
    sequencia[sequencia.length] = colorsequencia;
    sequenciaClicada = [];

    for(let i in sequencia) {
        let elementColor = createColorElement(sequencia[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let confereSequencia = () => {
    for(let i in sequenciaClicada) {
        if(sequenciaClicada[i] != sequencia[i]) {
            fimJogo();
            break;
        }
    }
    if(sequenciaClicada.length == sequencia.length) {
        alert(`Pontuação: ${Pontos}\nVocê acertou! Iniciando próximo nível!`);
        proximaFase();
    }
}

//funcao para o clique do usuario
let click = (color) => {
    sequenciaClicada[sequenciaClicada.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        confereSequencia();
    },250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return VERDE;
    } else if(color == 1) {
        return VERMELHO;
    } else if (color == 2) {
        return AMARELO;
    } else if (color == 3) {
        return AZUL;
    }
}

//funcao para proximo nivel do jogo
let proximaFase = () => {
    Pontos++;
    Sortear();
}

//funcao para game over
let fimJogo = () => {
    alert(`Pontuação: ${Pontos}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    sequencia = [];
    sequenciaClicada = [];

    jogar();
}

//funcao de inicio do jogo
let jogar = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    Pontos = 0;

    proximaFase();
}

//eventos de clique para as cores
VERDE.onclick = () => click(0);
VERMELHO.onclick = () => click(1);
AMARELO.onclick = () => click(2);
AZUL.onclick = () => click(3);


//inicio do jogo
jogar();