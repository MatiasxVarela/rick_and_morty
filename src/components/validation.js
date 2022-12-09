export default function validation (userData) {
    const errors = {}
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPass =  new RegExp("[0-9]")

    if (!userData.username){
        errors.username = "Este campo no puede estar vacio"
    } else if ((!regexEmail.test(userData.username))){
        errors.username = "User tiene que ser un Email"
    } else if (userData.username.length > 35){
        errors.username = "No puede ser un correo con mas de 35 caracteres"
    }


    if (!regexPass.test(userData.password)){
        errors.password = "La contraseña debe tener al menos un (1) numero"
    } else if (userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La contraseña tiene que tener una longitud entre 6 y 10 caracteres."
    }

    return errors
}