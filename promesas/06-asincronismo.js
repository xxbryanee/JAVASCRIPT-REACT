//callbacks
//un callbacks es una funcion que se pasa como argumento a otra funcion
///////////////////////////////////////////ejemplo de callbacks
function traerDatos (callback){
    console.log('cargando datos...')
    setTimeout(() => {
        callback('datos cargados')
    }, 2000) //2 segundos
}
//ejecucion de la funcion
traerDatos((datos) => console.log(datos))   //datos cargados


/////////////////////////////////////////////ejemplo de callbacks con error
function traerDatosConError (callback){
    console.log('cargando datos...')
    setTimeout(() => {
        callback('error al cargar los datos')
    }, 2000) //2 segundos
}

////////////////////////////////////////////////ejemplo de callback hell

setTimeout(() => {
    console.log('tarea 1')
    setTimeout(() => {
        console.log('tarea 2')
        setTimeout(() => {
            console.log('tarea 3')
            setTimeout(() => {
                console.log('tarea 4')
            }, 2000)
        }, 2000)
    }, 2000)
})

//ejemplo de promesas
//una promesa es un objeto que representa la terminacion o el fracaso de una operacion asincrona
//estados de una promesa
//pendiente pending --> en espera
//cumplida fulfilled --> se ha cumplido
//rechazada rejected --> se ha rechazado

//then() --> exitoso ,se ejecuta cuando la promesa se cumple
//catch() --> manejo de errores, se ejecuta cuando la promesa se rechaza

//ejemplo de promesa
const traerDatos = () => {
    return new Promise((resolve, reject) => {
        console.log('cargando datos...')
        setTimeout(() => {
            resolve('datos cargados')
            //reject('error al cargar los datos')
        }, 2000) //2 segundos
    })
}
//////////////////////////////////////////////ejecucion de la promesa
///////////////////////////////////////////////////////
function traerDatosPromesa(){
    return new Promise((resolve, reject) => {
        console.log('cargando datos...')
        setTimeout(() => {
            resolve('datos cargados')
            //reject('error al cargar los datos')
        }, 2000) //2 segundos
    })
}
traerDatos()
    .then((data) => {
        console.log(data) //datos cargados
        return "procesando los datos"
    })
    .then((messjage) => {
        console.log(messjage) //cargando la data en formato x
    })
    .catch((error) => {
        console.log(error) //error al cargar los datos
    })
//ejemplo de promesa con error
/********************************************************** */
//async //await
//async --> convierte una funcion en una funcion que devuelve una promesa 
//await --> espera a que la promesa se cumpla o se rechace
//o pasaua la funcion de la ejecucion de la funcion hasta que la promesa sea resuelta

//ejemplo de async await
const traerDatos= () => {
    return new Promise((resolve, reject) => {
        console.log('cargando datos...')
        setTimeout(() => {
            resolve('datos cargados')
            //reject('error al cargar los datos')
        }, 2000) //2 segundos
    })
}
const procesarDatos = async () => {     //funcion asincrona
    try {
        const data = await traerDatos() //espera a que la promesa se cumpla
        console.log(data) //datos cargados
        console.log("procesando datos")
    } catch (error) {
        console.error(error) //error al cargar los datos
    }
}
procesarDatos()


