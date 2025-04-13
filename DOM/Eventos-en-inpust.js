// Eventos del DOM - Inputs

const inputNombre = document.querySelector('#nombre')
inputNombre.addEventListener('input', (e) => {
    console.log(e.target.value.length)
})

const inputPassword = document.querySelector('#password')
inputPassword.addEventListener('input', functionPassword)

//lo que hace esta funcion es ocultar por 3 segundos la contraeña a la hora de digitarlo
function functionPassword () {
    inputPassword.type = "text"

    setTimeout(() =>{
        inputPassword.type = 'password'
    }, 300);
}