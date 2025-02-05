const valorCombustivel = 6.50;
const mediaConsumo = 10.5;
const distancia = 440;

const consumo = distancia / mediaConsumo;
const valorTotal = consumo * valorCombustivel;

console.log('O total de litros gasto nessa viagem, é de', consumo.toFixed(2) , 'litros, gastando um total de R$', valorTotal.toFixed(2),'!' );