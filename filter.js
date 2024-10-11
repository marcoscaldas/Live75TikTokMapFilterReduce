const numeros = [1,2,3,4,5,6];
const pares = [];

for(let i = 0; i <numeros.length; i ++){
    if( numeros[i] % 2 === 0){ //verdadeiro
        pares.push(numeros[i]);
    }
}
console.log("Resultado com o FOR ", pares);
//////////////////////////////////////////////
const numeros2 = [1,2,3,4,5,6];
const pares2 =
 numeros2.filter( numero => numero % 2 === 0 );

console.log("Resultado com o FILTER ", pares2);