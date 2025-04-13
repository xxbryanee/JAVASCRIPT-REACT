
const tecnologias = ['HTML', 'CSS', 'Javascript', 'React.js']
// Este bucle recorre el array 'tecnologias' y muestra en consola 
// el segundo elemento ('CSS') en cada iteración
for (let i = 0; i < tecnologias.length; i++){
    console.log(tecnologias[i]);
}

/******************************************************* */
//forEach
tecnologias.forEach(function (){
    //imprimiendo el elemento en la posicion i del array tecnologias
    console.log('desde la funcion forEach') 
    
})
/******************************************************* */
// forEach no retorna un nuevo array, simplemente ejecuta la función para cada elemento
tecnologias.forEach(function (a) {
    console.log(a); // Imprime cada elemento del array 'tecnologias'
});

/*****************************Map te trae un nuevo arreglo ************************** */
/**
 * Recorre el array `tecnologias` utilizando el método `map` y retorna un nuevo array
 * con los mismos elementos del array original.
  Nuevo array generado a partir de `tecnologias`,
 * donde cada elemento es igual al del array original.
 */
const arrayMap = tecnologias.map(function (tech){   
    return tech; //retorna el mismo array tecnologias
})
console.log(arrayMap); 

/*******************************for fo************************* */

for(let tech of tecnologias){
    console.log(tech); //imprimiendo el elemento en la posicion i del array tecnologias
}
