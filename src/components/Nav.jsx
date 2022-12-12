import styled from 'styled-components'
import SearchBar from "./SearchBar";
import { NavLink } from 'react-router-dom';

const NavStyled = styled.nav`
    padding-top: 12px;
    width: 100vw;
    height: 68px;
    background-color: #890AA8;
    position: fixed;
    box-shadow: 0px 6px 12px #00000029;
    z-index: 2;
`;
export default function Nav(props) {
    return (
    <NavStyled>
        <NavLink to="/home"><button>Home</button></NavLink>
        <NavLink to="/about"><button style={{margin:"0px 7px 5px 7px"}}>About</button></NavLink>
        <button onClick={() => props.onRandom()}>random</button>
        <SearchBar onSearch={props.onSearch}/>
    </NavStyled>)
}