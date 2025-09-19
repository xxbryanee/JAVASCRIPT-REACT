/* Un ejercicio intermedio con onChange: Filtro de una lista de usuarios por nombre
En este ejercicio, el evento onChange se utiliza en el campo <input> para detectar cada
 vez que el usuario escribe o modifica el texto en la caja de búsqueda.

¿Qué hace exactamente?

Cada vez que el usuario escribe algo, se dispara la función handleChange.
Esta función actualiza el estado search con el valor actual del input usando 
setSearch(e.target.value).
Al cambiar el estado search, el componente se vuelve a renderizar y se recalcula la lista 
filteredUsers mostrando solo los usuarios cuyo nombre coincide con el texto buscado.
¿Para qué sirve?

Permite que la interfaz sea interactiva y que la lista de usuarios se filtre en
 tiempo real según lo que el usuario escribe.
Ejemplo de uso en el código:

Resumen:
El onChange sirve para capturar los cambios en el input y actualizar 
el filtro de usuarios dinámicamente.
*/
const users = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Bruno" },
    { id: 3, name: "Carla" },
    { id: 4, name: "David" },
    { id: 5, name: "Elena" }
];

function UserFilter() {
    const [search, setSearch] = React.useState("");

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    function handleChange(e) {
        setSearch(e.target.value);
    }

    return (
        <div>
            <h2>Filtrar usuarios por nombre</h2>
            <input
                type="text"
                placeholder="Buscar usuario..."
                value={search}
                onChange={handleChange}
            />
            <ul>
                {filteredUsers.length > 0 ? (
                    filteredUsers.map(user => <li key={user.id}>{user.name}</li>)
                ) : (
                    <li>No se encontraron usuarios</li>
                )}
            </ul>
        </div>
    );
}

// Para usar este componente, impórtalo y agrégalo en tu App principal:
// import UserFilter from './eventos/onchange';
// <UserFilter />