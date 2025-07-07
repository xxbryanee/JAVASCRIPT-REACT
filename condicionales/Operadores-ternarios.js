//ternarios

const auth = true; //si el usuario esta autenticado se imprime el mensaje

const saldo = 1000;
const pagar = 1200;
const tarjeta = true; //si la tarjeta es verdadera se imprime el mensaje de compra exitosa
const efectivo = false; //si el efectivo es falso se imprime el mensaje de compra exitosa

if (auth) {     //si el usuario esta autenticado se imprime el mensaje
    console.log('Usuario autenticado'); //si el usuario esta autenticado se imprime el mensaje
} else {
    console.log('Usuario no autenticado'); //si el usuario no esta autenticado se imprime el mensaje
}

/**************este ejemplo es lo mismo que el de arriba************ */
auth ? 
console.log('Usuario autenticado') :    //si el usuario esta autenticado se imprime el mensaje
console.log('Usuario no autenticado'); //si el usuario esta autenticado se imprime el mensaje

/*********************otro ejemplpo*************************************** */
 // El operador ternario es una forma concisa de escribir una expresión condicional
// que evalúa una condición y devuelve un valor basado en si la condición es verdadera o falsa.
//  Sintaxis: condición ? valorSiVerdadero : valorSiFalso
// Ejemplo de uso del operador ternario 
// El operador ternario evalúa si el saldo es mayor que el precio a pagar.
// Si es verdadero, imprime 'Compra exitosa'; si es falso, imprime 'Compra fallida'.

saldo > pagar ?
    console.log('Compra exitosa') : //si el saldo es mayor que el precio se imprime el mensaje
    console.log('Compra fallida'); //si el saldo no es mayor que el precio se imprime el mensaje de compra fallida
   
/*********************otro ejemplpo*************************************** */
saldo > pagar || tarjeta ?
    console.log('Compra exitosa') : //si el saldo es mayor que el precio se imprime el mensaje
    efectivo ? //si el efectivo es verdadero se imprime el mensaje de compra exitosa
        console.log('Compra exitosa con efectivo') : //si el efectivo es verdadero se imprime el mensaje de compra exitosa
        console.log('Compra fallida'); //si el saldo no es mayor que el precio se imprime el mensaje de compra fallida

    


    // El resultado de 
    // esta expresión depende de los valores de las variables 
    // edad1 y permiso. Vamos a desglosarlo:
    //  Código explicado:
    //  Condición: edad1 >= 18 && permiso
    //
     //  Comprueba si edad1 es mayor o igual a 18 y si permiso es verdadero.
     //  Si ambas condiciones son ciertas, la expresión completa será true.
    //   Operador ternario:
    //
    //  Si la condición es true, ejecuta console.log('Acceso permitido').
    //  Si la condición es false, ejecuta console.log('Acceso denegado').
    //    Ejemplo de resultados:
    //    Si edad1 = 20 y permiso = true, el resultado será:
    //    Si edad1 = 16 o permiso = false, el resultado será:
    //   Si necesitas probarlo, puedes usar la consola de tu navegador o el terminal integrado de Visual Studio Code.
    // Ejemplo con múltiples condiciones

    //  ? valorSiVerdadero 
    //  : valorSiFalso.
    const edad = 20;
    const permiso = true;

    edad >= 18 && permiso ? 
        console.log('Acceso permitido') :  console.log('Acceso denegado');


//  Explicación:
//  La variable nombre está inicializada como una cadena vacía (''), 
// lo cual es un valor "falsy" en JavaScript (es decir, se evalúa como false en un contexto booleano).
//  El operador ternario evalúa la condición nombre. Como nombre es "falsy", 
// se ejecuta la parte después de los dos puntos (:), que es 'Hola, invitado'.
//  Finalmente, console.log(saludo) imprime 'Hola, invitado' en la consola.

    // Ejemplo con valores predeterminados
    const nombre = '';
    const saludo = nombre ? `Hola, ${nombre}` : 'Hola, invitado';
    console.log(saludo);

    // Ejemplo con números
    const numero = 15;
    const esPar = numero % 2 === 0 ? 'Es un número par' : 'Es un número impar';
    console.log(esPar);

//     texto.length: La propiedad length devuelve la longitud de la cadena. En este caso,
//      la longitud de 'JavaScript' es 10.
//     Operador ternario: La condición texto.length > 10 evalúa si la
//      longitud de la cadena es mayor que 10. Como 10 no es mayor que 10, la condición es falsa.
//     Resultado del operador ternario: Cuando la condición es falsa,
//     se ejecuta la segunda parte del operador ternario ('Texto corto').
//     Por lo tanto, el valor de la variable longitud será 'Texto corto',
//      y eso es lo que se imprime en la consola.

    // Ejemplo con cadenas
    const texto = 'JavaScript';
    const longitud = texto.length > 10 ? 'Texto largo' : 'Texto corto';
    console.log(longitud);

    // Ejemplo anidado
    const clima = 'soleado';
    const mensajeClima = clima === 'soleado' ? 
        'Lleva gafas de sol' : 
        clima === 'lluvioso' ? 
            'Lleva un paraguas' : 
            'Ten un buen día';
    console.log(mensajeClima);