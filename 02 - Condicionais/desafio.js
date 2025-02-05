const etanolValor = 5.60;
const gasolinaValor = 6.80;
const mediaConsumo = 11.5;
const distanciaViagem = 560;

const consumo = distanciaViagem / mediaConsumo;
const gastoA = consumo * etanolValor;
const gastoG = consumo * gasolinaValor;

let tipoCombustivel = "1";

if (tipoCombustivel === "1"){
    console.log("O valor gasto com Gasolina é de R$", gastoG.toFixed(2));    
}
else if (tipoCombustivel === "2"){
    console.log("O valor gasto com Alcool é de R$", gastoA.toFixed(2));
}
else{
    console.log("Coloque uma opção válida");
}