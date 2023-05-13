var nombre = document.getElementById(usuario);
var password = document.getElementById(clave);
var correo = document.getElementById(correo);
var error = document.getElementById(error);
error.style.color = 'red';
function enviarformulario(){
    console.log("Enviando formulario")
    var mensajeserror = [];

    if(nombre.value === null || nombre.value === ''){
        mensajeserror.push('Ingresa tu nombre ')
    }
    if(password.value === null || password.value === ''){
        mensajeserror.push('Ingresa tu contraseña ')
    }
    if(correo.value === null || correo.value === ''){
        mensajeserror.push('Ingresa tu correo')
    }

    error.innerHTML = mensajeserror.join(', ')
    return false;
}
