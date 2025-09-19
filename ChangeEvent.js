import  {  useState } from 'react';
import  {ChangeEvent} from 'react';

/**
 * Este componente muestra un input de texto y un select.
 * Usa useState para manejar el valor de ambos.
 * handleInputChange actualiza el valor del input.
 * handleSelectChange actualiza el valor del select.
 * Los valores actuales se muestran debajo de los controles.
 */
function ExampleComponent() {
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');

    // Maneja cambios en un input de texto
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    // Maneja cambios en un select
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Escribe algo"
            />
            <select value={selectValue} onChange={handleSelectChange}>
                <option value="">Selecciona una opción</option>
                <option value="opcion1">Opción 1</option>
                <option value="opcion2">Opción 2</option>
            </select>
            <div>Input: {inputValue}</div>
            <div>Select: {selectValue}</div>
        </div>
    );
}

export default ExampleComponent;