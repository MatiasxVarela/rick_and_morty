import styled from "styled-components";

const ContenedorMain = styled.div`
    margin: 30px auto auto auto;
    height: 400px;
    width: 450px;
    padding: 10px 20px 10px 20px;
    background-color: gray;
    background: #00B5CC;
    border: 8px solid #00444D;
    border-radius: 15px;
    box-shadow: 0px 6px 12px #00000029;
`;
const Parrafo = styled.p`
    font-size: 20px;
`;

export default function About() {
    return (
        <ContenedorMain>
            <h1>Sobre mi y el proyecto</h1>
            <Parrafo>Hola! Soy Matías Varela y este es mi integrador del segundo modulo (Frontend) de soy Henry.</Parrafo>
            <Parrafo>En este proyecto demuestros mis conocimientos sobre React y Redux.</Parrafo>
        </ContenedorMain>
    )
}