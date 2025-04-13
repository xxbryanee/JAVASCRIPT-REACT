


const saldo = 1000;
const precio = 500;
const tarjeta = true; //si la tarjeta es verdadera se imprime el mensaje de compra exitosa

if (saldo > precio) {
    console.log("Compra exitosa");  //si el saldo es mayor que el precio se imprime el mensaje
    
}
else if (tarjeta) {
    console.log("Compra exitosa con tarjeta");  //si la tarjeta es verdadera se imprime el mensaje de compra exitosa
}
else {
    console.log("Compra fallida");  //si el saldo no es mayor que el precio se imprime el mensaje de compra fallida
}   

/******************otro ejemplo con or y and */

/***
 * logical or y logical and
 * || Or - si uno de los dos es verdadero se cumple la condicion o almenos una se cumple
 * && And - si ambos son verdaderos se cumple la condicion o revisa que todos cumplan
 */

const saldo2 = 1000;
const precio2 = 500;
const tarjeta2 = true; //si la tarjeta es verdadera se imprime el mensaje de compra exitosa
const efectivo = false; //si el efectivo es falso se imprime el mensaje de compra exitosa

if (saldo2 > precio2 || tarjeta2) {
    console.log("Compra exitosa");  //si el saldo es mayor que el precio o la tarjeta es verdadera se imprime el mensaje de compra exitosa
}
else if (efectivo) {
    console.log("Compra exitosa con efectivo");  //si el efectivo es verdadero se imprime el mensaje de compra exitosa
}
else {
    console.log("Compra fallida");  //si el saldo no es mayor que el precio y la tarjeta es falsa se imprime el mensaje de compra fallida
}