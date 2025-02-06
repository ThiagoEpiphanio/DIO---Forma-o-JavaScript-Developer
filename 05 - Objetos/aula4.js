class Pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}!`);    
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}!`);   
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade!`);   
    }
}

const thiago = new Pessoa('Thiago', 40);
const thais = new Pessoa('Thais', 37);
const thomas = new Pessoa ('Thomas', 30);
const isabel = new Pessoa ('Isabel', 59);
const antonio = new Pessoa ('Antonio', 70);

compararPessoas(thais, thomas);