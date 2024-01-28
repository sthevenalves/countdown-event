'use strict mode';

const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizarTempo = (tempo) => {
    const segundos = document.querySelector('#segundos');
    const minutos = document.querySelector('#minutos');
    const horas = document.querySelector('#horas');
    const dias = document.querySelector('#dias');

    const qtdeSegundos = tempo % 60;

    const qtdeMinutos = Math.floor(tempo % (60 * 60)/60);

    const qtdeHoras = Math.floor(tempo % (60 * 60 * 24)/(60 * 60));

    const qtdeDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdeSegundos);
    minutos.textContent = formatarDigito(qtdeMinutos);
    horas.textContent = formatarDigito(qtdeHoras);
    dias.textContent = formatarDigito(qtdeDias);
}

const contagemRegressiva = (tempo) => {
    const stopTime = () => clearInterval(idInrerval);
    const contar = () => {
        if (tempo === 0) {
            stopTime();
        }
        atualizarTempo(tempo);
        tempo--;    
    }
    const idInrerval = setInterval(contar, 1000);
}

const tempoRestante = () => {
    const dataEvento = new Date('2024-01-30 20:00:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje)/1000);
}

contagemRegressiva(tempoRestante());