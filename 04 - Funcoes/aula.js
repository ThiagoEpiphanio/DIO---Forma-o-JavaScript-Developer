function quadrado (valor){
    return valor * valor; 
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

console.log('-----------------------------------')

function incrementarJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;    
}

console.log(incrementarJuros(100, 10));