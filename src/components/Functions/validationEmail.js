export default function validationEmail (userData) {
    let errors = ""
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!userData){
        errors = "Este campo no puede estar vacio"
    } else if ((!regexEmail.test(userData))){
        errors = "User tiene que ser un Email"
    } else if (userData.length > 35){
        errors = "No puede ser un correo con mas de 35 caracteres"
    }

    return errors
}