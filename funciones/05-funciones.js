

function sumar (){
  console.log (1+1) 
}
/*las funcoines son reutilizables por que puedes llamar variaveces*/
// Llamadas a la función sumar para demostrar su reutilización
sumar() 
sumar()
sumar()
/************************************************ */


//tipos de funciones
//***********************************por declaracion
function saludar(){ //funcion declarada
  console.log('hola') //funcion sin parametros
}	
saludar() //hola

//*************************************por declaracion con parametros
function saludarConNombre(nombre){  //funcion declarada con parametros
    console.log(`hola ${nombre}`) //funcion con parametros
  }
  saludarConNombre('Juan') //hola Juan

//************************************por expresion
const saludar2 = function(){
  console.log('hola')
}

saludar2() //hola


