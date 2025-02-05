/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let precoProduto = 134.50;
let condicaoPagamento = 'Pix';

const debito = precoProduto - (precoProduto * 0.1);
const dinheiroPix = precoProduto - (precoProduto * 0.15);
const duasVezes = precoProduto;
const parcelado = precoProduto + (precoProduto * 0.1);

if (condicaoPagamento === "Débito"){
    console.log("O valor a ser pago é R$", debito.toFixed(2));
}
else if (condicaoPagamento === "Dinheiro" || condicaoPagamento === "Pix"){
    console.log("O valor a ser pago é R$", dinheiroPix.toFixed(2));
}
else if (condicaoPagamento === "2x"){
    console.log("O valor a ser pago é R$", duasVezes.toFixed(2));
}
else{
    console.log("O valor a ser pago é R$", parcelado.toFixed(2));
}