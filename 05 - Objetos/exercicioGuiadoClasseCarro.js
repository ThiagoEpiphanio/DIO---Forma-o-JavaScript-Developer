class Car{
    modelo;
    cor;
    mediaConsumoKM;

    constructor(modelo, cor, mediaConsumoKM){
        this.modelo = modelo;
        this.cor = cor;
        this.mediaConsumoKM = mediaConsumoKM;
    }     

    calcularGastoViagem(distancia, litroCombustivel){
        let totalLitros;
        let distanciaPercorrida = distancia;

        totalLitros = distancia * this.mediaConsumoKM
        return [totalLitros * litroCombustivel, distanciaPercorrida];
                
    }
};

const corolla = new Car ('Corolla', 'Preta', 1/8);

const [gastoTotal, distanciaPercorrida] = corolla.calcularGastoViagem(70, 5);

console.log(`O total gasto para uma viagem de ${distanciaPercorrida}km é de R$ ${gastoTotal}`);