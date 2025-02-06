function incrementarJuros(valor, percentualDeJuros) { 
    const incremento = (percentualDeJuros / 100) * valor; 
    return valor + incremento; 
}

function incrementarJuros(valor, percentualDeJuros) { 
    const incremento = (percentualDeJuros / 100) * valor; 
    return valor + incremento; 
}

//Trecho de código abaixo, está errado
function calcularMedia(nota1, nota2) { 
    const media = (nota1 + nota2) / 2; } 
    
    console.log(calcularMedia(5, 5));
//----------------------------------------

//Função Correta
function calcularMedia(nota1, nota2) { 
    return media = (nota1 + nota2) / 2; 
}    
    console.log(calcularMedia(8, 5));