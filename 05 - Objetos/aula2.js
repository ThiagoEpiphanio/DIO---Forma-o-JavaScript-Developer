class Pessoa{
    nome;
    idade;
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

const thiago = new Pessoa();
thiago.nome = 'Thiago E. da Silva';
thiago.idade = 40;

const thais = new Pessoa();
thais.nome = 'Thais E. da Silva';
thais.idade = 38;

const thomas = new Pessoa();
thomas.nome = 'Thomas E. da Silva';
thomas.idade = 30;

console.log(thiago);
thiago.descrever();
thais.descrever();
thomas.descrever();


console.log('------------------------------------------------------');

//Outro Exemplo
class Car{
    marca;
    modelo;
    motor;
    ano;
    combustível;
};