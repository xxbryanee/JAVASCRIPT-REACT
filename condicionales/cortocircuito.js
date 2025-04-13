

const auth = true
// Evaluacion de corto circuito
// si el valor es verdadero se imprime el mensaje
// si el valor es falso se imprime el mensaje

if(40){
    console.log('Truthy')   //si el valor es verdadero se imprime el mensaje
}else{
    console.log('Falsy')    //si el valor es falso se imprime el mensaje
}


/*********************************Otro Ejemplo**************************** */

const user = true 

user && console.log('Usuario autenticado') //si el usuario es verdadero se imprime el mensaje
//si el usuario es falso no se imprime el mensaje

/*********************************Otro Ejemplo**************************** */

user ? console.log('Usuario autenticado') //si el usuario es verdadero se imprime el mensaje