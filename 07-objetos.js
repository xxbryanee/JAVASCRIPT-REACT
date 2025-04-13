//objetos
//coleccion de propiedades donde cada propiedad tiene una CLAVE  y un VALOR
//{}

const persona = {
    nombre: "angelo",
    edad: 34,
    profesion: "ingeniero",
    "celular trabajo": 123456789

};
console.log(persona["celular trabajo"]);    //123456789
console.log(persona["nombre"]); //angelo

/********///////////////////// Destructuring************************************ */
const { nombre, edad, profesion } = persona; //destructuring de objeto persona
console.log(nombre); //angelo
console.log(edad); //34
console.log(profesion); //ingeniero

/********///////////////////// Destructuring de dos o mas objetos************************************ */
const producto2 = {
    nombres: "Lima",
    pais: "Peru",
    disponible: true
};

const cliente = {
    nombres: "Juan",
    edadd: 30,
    telefono: 123456789,
    disponible: false,
    direccion: {
        calle: "calle ica",
        ciudad: "Lima",
        pais: "Peru"
    }
};
const { nombres } = producto2; //destructuring de objeto producto2
const { nombres: nombreCliente, edadd, telefono, direccion: {calle}} = cliente;    //destructuring de objeto cliente


console.log(nombres); //Lima
console.log(nombreCliente); //Juan
console.log(calle); //calle ica

/****************************************************unir 2 o mas objetos******* **/
const producto3 = {
    nombres: "Lima",
    pais: "Peru",
    disponible: true
};

const cliente2 = {
    nombres: "Juan",
    edadd: 30,
    telefono: 123456789,
    disponible: false
};

const carrito = {
    canntidad: 1,
    ...producto3, //destructuring de objeto producto3
}

const nuevoObjeto1 = {
    producto9: {...producto3}, //destructuring de objeto producto3
    cliente: {...cliente2}, //destructuring de objeto cliente2

}
console.log(carrito); //{ canntidad: 1, nombres: 'Lima', pais: 'Peru', disponible: true }
console.log(nuevoObjeto1); //{ producto9: { nombres: 'Lima', pais: 'Peru', disponible: true },
// cliente: { nombres: 'Juan', edadd: 30, telefono: 123456789, disponible: false } }

const nuevoObjeto4 = Object.assign(producto3, cliente2); //unir 2 objetos
console.log(nuevoObjeto4); //{ nombres: 'Juan', edadd: 30, telefono: 123456789, disponible: false }


/****************************************************otro ejemplo******** */

const auto = new Object(); //creando un objeto vacio
auto.marca = "ford"; //agregando propiedades al objeto{
auto.modelo = "mustang";
auto.color = "rojo";
auto.anio = 2023;

console.log(auto.marca); //ford
console.log(auto.modelo); //mustang
console.log(auto) //ford mustang rojo 2023
console.log(auto["marca"]); //ford

delete auto.marca; //eliminar propiedad marca
console.log(auto); //{ modelo: 'mustang', color: 'rojo', anio: 2023 }


/******/////////////////////////////**otro ejemplo****************************************** */
const autenticado =true
const usuario2 = "juan"

const nuevoObjeto = {   //creando un objeto nuevo
    autenticado, //true
    usuario: usuario2   //juan
}

console.log(nuevoObjeto); //{ autenticado: true, usuario: 'juan' }
console.log(nuevoObjeto.autenticado); //true
console.log(nuevoObjeto.usuario); //juan
console.log(nuevoObjeto["usuario"]); //juan



/******/////////////////////////////**otro ejemplo****************************************** */
const persona1 = {
    nombre: "angelo",
    edad: 34,
    profesion: "ingeniero",
    "celular trabajo": 123456789,
    saludar: function () {
        console.log("Hola soy " + this.nombre); //this hace referencia al objeto persona1
    },

};
persona1.saludar(); //Hola soy angelo
//otra forma de definir un objeto


/******/////////////////////////////**otro ejemplo****************************************** */
//definiendo un objeto con una funcion constructora
function Auto(marca, modelo, color, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
}
const auto1 = new Auto("ford", "mustang", "rojo", 2023);
const auto2 = new Auto("chevrolet", "camaro", "amarillo", 2022);

console.log(auto1); //{ marca: 'ford', modelo: 'mustang', color: 'rojo', anio: 2023 }


/******/////////////////////////////**objetos manipulacion****************************************** */

const producto = {
    nombre: "Laptop",
    precio: 1000,
    categoria: "Electronica",
    disponible: false,
}
Object.freeze(producto); //congelando el objeto producto para que no se pueda modificar /* ojo*/
//producto.precio = 2000; //no se puede modificar el objeto congelado

Object.seal(producto); //sellando el objeto producto para que no se puedan agregar o eliminar propiedades /* ojo*/
//producto.precio = 2000; //se puede modificar el objeto sellado /*ojo*/
//producto.imagen = "imagen.jpg"; //no se puede agregar una nueva propiedad al objeto sellado /*ojo*/


//reescribir un valor
producto.disponible = true; //modificando la propiedad disponible a true
//agregar una propiedad sino existe lo va a agregar
producto.imagen = "imagen.jpg"; //agregando una nueva propiedad imagen al objeto producto
//eliminar una propiedad
delete producto.precio; //eliminando la propiedad precio del objeto producto
//modificar una propiedad si existe lo va a modificar
producto.nombre = "Laptop HP"; //modificando la propiedad nombre a Laptop HP
//eliminar una propiedad
delete producto.categoria; //eliminando la propiedad categoria del objeto producto
//acceder a una propiedad
console.log(producto.nombre); //Laptop HP
console.log(producto); //{ nombre: 'Laptop HP', disponible: true, imagen: 'imagen.jpg' }
//acceder a una propiedad con corchetes
console.log(producto["disponible"]); //true
console.log(producto["imagen"]); //imagen.jpg


/******/////////////////////////////**otro ejemplo****************************************** */
