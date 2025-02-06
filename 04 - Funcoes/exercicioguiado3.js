function escreverMeuNome(nome){
    return nome;
}

function verificarIdade(idade){
    if (idade >=18){
        return 'você é maior de idade';
    }
    else{
        return 'você é menor de idade';
    }
}

function mostrarNomeeIdade(nome, idade){
    console.log("Seu nome é ", escreverMeuNome(nome), 'e', verificarIdade(idade));
}

mostrarNomeeIdade('Thiago', 17);