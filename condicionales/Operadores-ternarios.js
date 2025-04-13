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

saldo > pagar ?
    console.log('Compra exitosa') : //si el saldo es mayor que el precio se imprime el mensaje
    console.log('Compra fallida'); //si el saldo no es mayor que el precio se imprime el mensaje de compra fallida

/*********************otro ejemplpo*************************************** */
saldo > pagar || tarjeta?
    console.log('Compra exitosa') : //si el saldo es mayor que el precio se imprime el mensaje
    console.log('Compra fallida'); //si el saldo no es mayor que el precio se imprime el mensaje de compra fallida
        efectivo ? //si el efectivo es verdadero se imprime el mensaje de compra exitosa
            console.log('Compra exitosa con efectivo') : //si el efectivo es verdadero se imprime el mensaje de compra exitosa

    
