const N = 5;
let maiorNumeroPar = 0;
let menorNumeroImpar = 1;

for (let i = 0; i < N; i++) {
  const numero = parseInt(N);

  if (numero % 2 == 0) {
    if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  }
  // TODO: Criar a condição e regras para identificar também o "menorNumeroImpar".
}
       
// TODO: Imprima as saídas conforme o enunciado deste desafio.