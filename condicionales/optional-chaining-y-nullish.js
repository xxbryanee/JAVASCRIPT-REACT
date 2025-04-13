
//optional chaining (?)

const alumno = {
    nombre: "Juan", 
    clase: 'programacion 1',
    aprobado: true
};

console.log(alumno.examenes?.examen1) //undefined


console.log('DESPUES de ALUMNO ')   

//  Nullish coalescing operator (??)

//nullish coalescing operator (??) devuelve el valor de la izquierda si no es null o undefined,
//  de lo contrario devuelve el valor de la derecha

const pagina = null ?? 1 
console.log(pagina) //1

const pagina2 = 0 ?? 1  
console.log(pagina2) //0    