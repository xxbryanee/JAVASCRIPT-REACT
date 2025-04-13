const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

const react =tecnologias[3]; //obteniendo el elemento en la posicion 3 del array tecnologias

//DESTRUCTURIN ARRAYS
 //destructurando el array tecnologias y obteniendo los elementos en las posiciones 0 y 1
const[html, css, js, reactjs] =tecnologias;  
//obteniendo el elemento en la posicion 0 y 1 del array tecnologias
console.log(reactjs); //imprimiendo el elemento en la posicion 3 del array tecnologias

/****************************otro ejejmpplo pero diferente  */
const [ , , , reactjs2] = tecnologias; //obteniendo el elemento en la posicion 3 del array tecnologias
console.log(reactjs2); //imprimiendo el elemento en la posicion 3 del array tecnologias