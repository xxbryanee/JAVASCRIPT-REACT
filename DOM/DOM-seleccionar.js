// selectores



//  .clase  : se llama clase porque se le asigna a un elemento en el html con el atributo class
//  #id     : se llama id porque se le asigna a un elemento en el html con el atributo id
//  .nombre : se llama nombre porque se le asigna a un elemento en el html con el atributo name
// :localStorage : se llama localStorage porque se le asigna a un elemento en el html con el atributo localStorage
// :sessionStorage : se llama sessionStorage porque se le asigna a un elemento en el html con el atributo sessionStorage
//  [atributo] : se llama atributo porque se le asigna a un elemento en el html con el atributo atributo
//  [atributo="valor"] : se llama atributo porque se le asigna a un elemento en el html con el atributo atributo y valor
//  [atributo^="valor"] : se llama atributo porque se le asigna a un elemento en el html con el atributo atributo y valor que empieza con valor
//  [atributo$="valor"] : se llama atributo porque se le asigna a un elemento en el html con el atributo atributo y valor que termina con valor
//  [atributo*="valor"] : se llama atributo porque se le asigna a un elemento en el html con el atributo atributo y valor que contiene valor
//  [atributo~="valor"] : se llama atributo porque se le asigna a un elemento en el html con el atributo atributo y valor que contiene valor separado por espacios

const heading = document.querySelector('.heading'); // Selecciona el primer elemento con la clase 'heading'
console.log(heading.tagName); // Imprime el nombre de la etiqueta del elemento seleccionado (h1, p, etc.)
console.log(heading.className); // Imprime el nombre de la clase del elemento seleccionado
console.log(heading.textContent); // Imprime el contenido de texto del elemento seleccionado
console.log(heading.innerHTML); // Imprime el contenido HTML del elemento seleccionado


// Selecciona todos los enlaces dentro de la clase 'navegacion'
const enlaces = document.querySelectorAll('.navegacion a'); 
console.log(enlaces); // Imprime una lista de todos los enlaces seleccionados


// Selecciona el primer elemento con la clase 'navegacion'
const enlaces2 = document.querySelector('.navegacion'); 
console.log(enlaces2); // Imprime el primer elemento seleccionado con la clase 'navegacion'