// 1. Creamos los elementos básicos en el HTML usando JavaScript
const ul = document.createElement('ul');
ul.id = 'mi-lista';

const boton = document.createElement('button');
boton.textContent = 'Agregar elemento';

// Agregamos la lista y el botón al body
document.body.append(ul, boton);

// 2. Creamos una función para agregar elementos a la lista
let contador = 1;
boton.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = `Elemento ${contador}`;
    ul.append(li); // Usamos append para agregar el nuevo <li> al <ul>
    contador++;
});

/*
Explicación:
- document.createElement('ul') crea una lista vacía.
- document.createElement('button') crea un botón.
- document.body.append(ul, boton) agrega ambos elementos al documento.
- Cuando el usuario hace clic en el botón, se crea un nuevo <li> y se agrega al <ul> usando append.
- append permite agregar uno o varios nodos o texto al final de un elemento.
*/