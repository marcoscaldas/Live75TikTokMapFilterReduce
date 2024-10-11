const numeros = [1,2,3,4,5];
// indice        0 1 2 3 4

const dobrados = [];

for(let i = 0; i < numeros.length; i ++ ){

    dobrados.push(numeros[i] * 2);
}
console.log('Resultado com FOR ', dobrados);
////////////////////////////////////////////////////
const numeros2 = [1,2,3,4,5];

const dobrados2 =
 numeros2.map( numero => numero * 2 );

 console.log('Resultado com MAP ', dobrados2);
