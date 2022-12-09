import React from "react";
import styled from "styled-components";
import validation from "./validation";

const ContenedorForm = styled.form`
    margin: 15vh auto auto auto;
    height: 350px;
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
    font-size: 15px;
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

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
        setErrors(
            validation({
                ...userData, [e.target.name]: e.target.value
            })
        )
    }

    const handleSubmit = (e) => {
        props.login(userData)
    }
    return ( 
        <ContenedorForm onSubmit={() => handleSubmit()}>
            <IndivualInput>
                <label htmlFor="username">Username: </label>
                <input name="username" type="text" onChange={handleChange} placeholder="ejemplo@gmail.com"/>
                {errors.username !== "" && <PError>{errors.username}</PError>}
            </IndivualInput>
            <IndivualInput>
                <label htmlFor="password">Password: </label>
                <input name="password" type="password" onChange={handleChange} placeholder="1password"/>
                {errors.password !== "" && <PError>{errors.password}</PError>}
            </IndivualInput>
                <button type="submit">LOGIN</button>
                <p>Para poder logearte debes usar:</p>
                <p>Email: ejemplo@gmail.com</p>
                <p>Pass: 1password</p>
        </ContenedorForm>
    )
}