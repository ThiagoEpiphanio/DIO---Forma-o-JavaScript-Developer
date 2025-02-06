function efetuarPagamento(precoProduto, condicaoPagamento){
    let valorFinal;

    if (condicaoPagamento === "Débito"){
        valorFinal = aplicarDesconto(precoProduto, 0.10);
    }
    else if (condicaoPagamento === "Dinheiro" || condicaoPagamento === "Pix"){
        valorFinal = aplicarDesconto(precoProduto, 0.15);
    }
    else if (condicaoPagamento === "2x"){
        valorFinal = aplicarDesconto(precoProduto);
    }
    else{
        valorFinal = aplicarAcrescimo(precoProduto, 0.10);
    }

    return valorFinal.toFixed(2);
}

function aplicarDesconto(precoProduto, desconto){
    return (precoProduto - (precoProduto * desconto));    
}

function aplicarAcrescimo(precoProduto, acrescimo){
    return (precoProduto + (precoProduto * acrescimo));
}

console.log("Valor final:", efetuarPagamento(100, 'Parcelado'));
