//  El hook useMemo en React se utiliza para memorizar valores calculados y evitar cálculos 
//  innecesarios en cada renderizado. Esto es útil cuando tienes operaciones costosas
//  (como cálculos matemáticos complejos o filtrado de grandes listas) que no deberían 
//   ejecutarse a menos que sus dependencias cambien.
//  
//  Aunque no has compartido el resto del código, puedo explicarte cómo se usa useMemo 
//  en general y cómo podría aplicarse en tu archivo UseMemoExample.

//  El renderizado en React se refiere al proceso en el que React actualiza el DOM virtual y, 
//  si es necesario, el DOM real para reflejar los cambios en la interfaz de usuario.
//  Esto ocurre cuando el estado o las props de un componente cambian, lo que provoca que 
//  React vuelva a ejecutar la función del componente para determinar cómo debería verse la interfaz.
//  
//  Ejemplo básico de useMemo
//  
//  Explicación del ejemplo
//  
//  
//  ¿Qué hace useMemo aquí?



import React, { useState, useMemo } from 'react';


const UseMemoExample = () => {
    const [count, setCount] = useState(0);  //
    // Estado para manejar el texto ingresado por el usuario
    const [text, setText] = useState('');

    // useMemo para calcular un valor costoso solo cuando `count` cambia
    const expensiveCalculation = useMemo(() => {
        console.log('Realizando cálculo costoso...');
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += count;
        }
        return result;
    }, [count]);

    return (
        <div>
            <h1>useMemo Example</h1>
            <p>Resultado del cálculo costoso: {expensiveCalculation}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar Count</button>
            <button onClick={() => setCount(count - 1)}>Decrementar Count</button>
            <p>Count actual: {count}</p>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Escribe algo"
            />
            <p>Texto ingresado: {text}</p>
        </div>
    );
};
export default UseMemoExample;
//  El hook useMemo memoriza el resultado de una función y solo lo recalcula cuando sus 
// dependencias cambian.
//  En este caso, el cálculo costoso se realiza solo cuando `count` cambia, no cuando `text` cambia.
//  useMemo memoriza el resultado de la función que realiza el cálculo costoso (en este caso, 
// sumar count un gran número de veces).
//  Memoriza el resultado de count * 2 y solo recalcula este valor cuando count cambia.
//  Si el usuario escribe en el campo de texto (text), el componente se renderiza nuevamente,
// pero el cálculo costoso no se ejecuta porque count no cambió.
//  ¿Por qué es útil?
//  
//  Si el cálculo fuera muy pesado, evitarías que se ejecute innecesariamente en cada renderizado, mejorando el rendimiento.
//  Dependencias ([count]):
//  
//  useMemo depende de count. Si count no cambia, el valor memorizado se reutiliza.
//  ¿Cómo aplicarlo en tu archivo?
//  Si tu componente UseMemoExample realiza cálculos costosos o manipula datos que no deberían recalcularse en cada renderizado, puedes usar useMemo para optimizarlo. Si compartes más detalles del código, puedo ayudarte a integrarlo correctamente.
