 /*"target".

En contextos de formularios y eventos en JavaScript (y por lo tanto en React), target se refiere 
al elemento que ha disparado el evento. Aquí hay algunos puntos clave sobre target:

1.-Referencia del Elemento: En el contexto de un evento, el target refiere al
 elemento específico que fue activado, como un botón, un input, o un select.
 
2.-Acceso a Valores: Puedes acceder a propiedades y valores del elemento a través de event.target.
  Por ejemplo, en un evento onChange, puedes obtener el valor de un campo específico.
  
3.-Uso en Eventos: Al manejar eventos, como un submit de formulario, puedes usar event.currentTarget o event.
  target para referenciar el elemento en cuyo contexto se creó el evento.
  
Aquí tienes un ejemplo de cómo se utiliza target en un evento de cambio 
(onChange) en un componente de React:*/

import React, { useState } from 'react';

const MiFormulario = () => {
    const [datos, setDatos] = useState({ categoria: '', nombre: '' });

    const handleChange = (event) => {
        const { id, value } = event.target; // Usamos target para obtener el id y el valor del input
        setDatos((prevDatos) => ({
            ...prevDatos,
            [id]: value, // Actualizamos solo el campo correspondiente
        }));
    };

    return (
        <form>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" value={datos.nombre} onChange={handleChange} />

            <label htmlFor="categoria">Categoría:</label>
            <select id="categoria" value={datos.categoria} onChange={handleChange}>
                <option value="">Selecciona una categoría</option>
                <option value="categoria1">Categoría 1</option>
                <option value="categoria2">Categoría 2</option>
            </select>
        </form>
    );
};

export default MiFormulario;