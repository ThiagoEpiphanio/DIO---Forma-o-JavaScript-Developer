function calcularImc(peso, altura){
    return peso / (altura ** 2);    
}

function classificarImc(imc){
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

function main(){
    const peso = 120;
    const altura = 1.86;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main();