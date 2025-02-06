const thiago = {
    nome: 'Thiago Epiphanio da Silva',
    idade: 40,
    sexo: 'Masculino'
};

thiago.altura = 1.85;

console.log(thiago);

console.log('---------------------------------------')

const pessoa = {
    nome: 'Thiago E. da Silva',
    idade: 40,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
};

pessoa.nome = 'Thais';
pessoa.idade = 38;

pessoa.descrever();

console.log('---------------------------------------')

console.log(pessoa['idade']);