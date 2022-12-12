export default function validationPass (userData){
    let errors = ""
    const regexPass =  new RegExp("[0-9]")

    if (!regexPass.test(userData)){
        errors = "La contraseña debe tener al menos un (1) numero"
    } else if (userData.length < 6 || userData.length > 10){
        errors = "La contraseña tiene que tener una longitud entre 6 y 10 caracteres."
    }

    return errors
}