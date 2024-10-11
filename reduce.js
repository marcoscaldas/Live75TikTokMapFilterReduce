const numeros = [1,2,3,4,5];
let soma = 0;

for (let i = 0; i < numeros.length; i++ ){
    soma += numeros[i];
}
console.log('Resultado com o FOR ', soma);
/////////////////////////////////////////////////////
const numeros2 = [1,2,3,4,5];
let soma2 =
numeros2.reduce( ( acumulador, valorAtual ) =>
    acumulador + valorAtual, 0
);
console.log('Resultado com o REDUCE ', soma2);
