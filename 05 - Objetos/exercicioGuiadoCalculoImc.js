class Pessoa{
    nome;
    peso;
    altura;

    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura ** 2);
    }

    classificarImc(){
        const imc = this.calcularImc();
        if (imc < 18.5){
            return "Seu IMC é:", imc.toFixed(2),"você está abaixo do peso";
        }
        else if (imc >= 18.5 && imc < 25 ){
            return "Seu IMC é:", imc.toFixed(2),"você está peso normal";
        }
        else if (imc >= 25 && imc < 30 ){
            return "Seu IMC é:", imc.toFixed(2),"você está acima do peso";
        }
        else if (imc >= 30 && imc < 40 ){
            return "Seu IMC é:", imc.toFixed(2),"você está obeso";
        }
        else if (imc > 40 ){
            return "Seu IMC é:", imc.toFixed(2),"você está com obesidade Grave";
        }
    }
}

const thiago = new Pessoa('Thiago', 86, 1.86);
const thais = new Pessoa ('Thais', 83, 1.83);

console.log(`O Imc de ${thiago.nome} é ${thiago.calcularImc().toFixed(2)} e ${thiago.classificarImc()}`);
console.log(`O Imc de ${thais.nome} é ${thais.calcularImc().toFixed(2)} e ${thais.classificarImc()}`);