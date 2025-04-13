//if
let edad = 17;
if(edad >= 18){
  console.log('ya eres mayor de edad') //codigo a ejecutar si la condicion es verdadera
} else if (edad > 12){
  console.log('eres adolencte') //codigo a ejecutar si la condicion es verdadera

   } else{
    console.log('eres menor de edad') //codigo a ejecutar si la condicion es falsa
   }

//switch
let dia = 3;
switch(dia){
  case 1:
    console.log('lunes')
    break;
  case 2:
    console.log('martes')
    break;
  case 3:
    console.log('miercoles')
    break;
  case 4:
    console.log('jueves')
    break;
  case 5:
    console.log('viernes')
    break;
  default:
    console.log('fin de semana')
}
//WHILE 
let i = 0;
while(i < 5){
  console.log(i)
  i++ //incremento
}
//do while
let j = 0;
do{
  console.log(j)
  j++ //incremento
}
while(j < 5);
//for
for(let i = 0; i < 5; i++){
    console.log(`el valor de i es: ${i}`) //template string
  }
/////////////////////////////////////////////////////////////////////////////////  
const frutas = ['manzana', 'banana', 'naranja'];
for(let i = 0; i < frutas.length; i++){
  console.log(`${frutas[i]} es una fruta`) // manzana es una fruta, banana es una fruta, naranja es una fruta
}

//for of
for(let fruta of frutas){
  console.log(`${fruta} es una fruta`) // manzana es una fruta, banana es una fruta, naranja es una fruta
}

//for in
for(let i in frutas){
  console.log(`${frutas[i]} es una fruta`) // manzana es una fruta, banana es una fruta, naranja es una fruta,
  //  0 es una fruta, 1 es una fruta, 2 es una fruta   
}