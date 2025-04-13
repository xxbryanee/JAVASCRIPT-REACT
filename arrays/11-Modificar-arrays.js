const tecnologias =['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']; //array de strings
tecnologias[4] = 'Angular'; //modificando el elemento en la posicion 4 del array tecnologias se agregara un nuevo elemento
tecnologias.push('Vue.js'); //agregando un elemento al final del array tecnologias es mejor usar eso pero no usar con react
console.log(tecnologias); //array tecnologias con el nuevo elemento agregado al final

/*otro metodo para agregar un elemento para ausar con react*/

const nuevoArreglo = [...tecnologias, 'Sass']; //agregando un nuevo elemento al final del array tecnologias usando el operador spread
console.log(nuevoArreglo); //array tecnologias con el nuevo elemento agregado al final

//eliminar un elemento del array tecnologias
tecnologias.shift(); //eliminando el primer elemento del array tecnologias
console.log(tecnologias); //array tecnologias sin el primer elemento

//usando filter para eliminar un elemento del array tecnologias
const tecnologiasFiltradas = tecnologias.filter(function (tecnologia) {
    if (tecnologia !== 'JavaScript') {
        return true; //si la tecnologia no es javascript se agrega al nuevo array
    }
    return false; //si la tecnologia es javascript no se agrega al nuevo array
});
console.log(tecnologiasFiltradas); //array tecnologias sin javascript
console.log(tecnologias); //array tecnologias sin javascript

//usando el operador arrow function para eliminar un elemento del array tecnologias
//eliminando javascript del array tecnologias usando el operador arrow function
const tecnologia2 =tecnologias.filter((tecnologia) => tecnologia !== 'JavaScript'); //eliminando javascript del array tecnologias usando el operador arrow function
console.log(tecnologia2); //array tecnologias sin javascript

//usando el operador map para modificar un elemento del array tecnologias
const tecnologias3 = tecnologias.map((tecnologia) => tecnologia.toUpperCase()); //convertiendo todas las tecnologias a mayusculas
console.log(tecnologias3); //array tecnologias con todas las tecnologias en mayusculas

//usando el operador map para recorrer el array tecnologias y imprimir cada tecnologia
const tecnologias4 = tecnologias.map(function (tech) {
    if(tech === 'JavaScript') {
        return tech.toUpperCase(); //si la tecnologia es javascript se convierte a mayusculas
    }
    return tech; //si no es javascript se deja igual
   
})
console.log(tecnologias4); //array tecnologias con javascript en mayusculas y el resto igual
//usando el operador map para recorrer el array tecnologias y imprimir cada tecnologia