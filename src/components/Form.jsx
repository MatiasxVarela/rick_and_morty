import React from "react";
import styled from "styled-components";
import validationEmail from "./Functions/validationEmail";
import validationPass from "./Functions/validationPass";

const ContenedorForm = styled.form`
    margin: 23vh auto auto auto;
    height: 325px;
    width: 400px;
    padding: 50px;
    background-color: gray;
    background: #00B5CC;
    border: 8px solid #00444D;
    border-radius: 15px;
    box-shadow: 0px 6px 12px #00000029;

`;

const IndivualInput = styled.div`
    width: 400px;
    margin-bottom: 30px;
    font-size: 25px;
`;
const PError = styled.p`
    color: #8A440E;
    font-size: 16px;
    margin-bottom: -13px;
    transform: translate(0px, -7px);
`;
export default function Form (props) {
    const [userData, setUserData] = React.useState({
         username: '', 
         password: '' 
        });

    const [errors, setErrors] = React.useState({
         username: '', 
         password: '' 
        });

    const handleChangeEmail = (e) => {
        const errorsEmail = validationEmail(e.target.value)
        setUserData({...userData, [e.target.name]: e.target.value})
        setErrors({...errors, [e.target.name]: errorsEmail})
    }

    const handleChangePass = (e) => {
        const errorPass = validationPass(e.target.value)
        setUserData({...userData, [e.target.name]: e.target.value})
        setErrors({...errors, [e.target.name]: errorPass})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.login(userData)
    }
    return ( 
        <ContenedorForm onSubmit={(e) => handleSubmit(e) }>
            <IndivualInput>
                <label htmlFor="username">Username: </label>
                <input name="username" type="text" onChange={handleChangeEmail} placeholder="ejemplo@gmail.com" autocomplete="off"/>
                {errors.username !== "" && <PError>{errors.username}</PError>}
            </IndivualInput>
            <IndivualInput>
                <label htmlFor="password">Password: </label>
                <input name="password" type="password" onChange={handleChangePass} placeholder="1password" autocomplete="off"/>
                {errors.password !== "" && <PError>{errors.password}</PError>}
            </IndivualInput>
                <button type="submit" style={{marginTop: "7px"}}>LOGIN</button>
                <p>Para poder logearte debes usar:</p>
                <p>Email: ejemplo@gmail.com</p>
                <p>Pass: 1password</p>
        </ContenedorForm>
    )
}