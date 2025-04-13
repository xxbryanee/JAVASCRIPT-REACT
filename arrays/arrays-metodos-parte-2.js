
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']; //array de strings
const numeros = [1, 2, 3, 4, 5]; //array de numeros


//verifica si hay un numero mayor a 15 en el array numeros
const resultado = numeros.some( numero => numero >15 ); 

console.log(resultado); //false - no hay ningun numero mayor a 15 en el array numeros

/////**************************otro ejemplo con filter************ */

//filtra los numeros mayores a 15 en el array numeros
const resultado2 = numeros.filter( numero => numero > 15 ); 
console.log(resultado2.length); //0 - no hay ningun numero mayor a 15 en el array numeros

/////**************************otro ejemplo con filter y condicionales************ */

const resultado3 = numeros.filter( numero => numero > 15 );
if(resultado3.length > 0) {
    console.log('si hay elemento'); 
}else{
    console.log('no hay elemento'); 
}

console.log(resultado3); //[] - no hay ningun numero mayor a 15 en el array numeros

/////**************************otro ejemplo con Find devuelve el primer elemnto que cumple una condicion************ */

const resultado4 = numeros.find( numero => numero < 15 );   //devuelve el primer elemento que cumple la condicion
console.log(resultado4);        //1 - devuelve el primer elemento que cumple la condicion

/**********************************************Every - retorna true o false si todos cumplen la condicion******************************************** */

const resultado5 = numeros.every( numero => numero < 15 ); 
console.log(resultado5);    //true - todos los elementos cumplen la condicion

/**********************************************Reduce - Retorna un acumulado del total********************************************************** */

const resultado6 = numeros.reduce( (total, numero) => {
   console.log(total)
   console.log(numero) //imprimiendo el elemento en la posicion i del array numeros
   
    return total + numero; //retorna un acumulado del total
}, 0) //retorna un acumulado del total

console.log(resultado6); //0 - retorna un acumulado del total
//retorna un acumulado del total