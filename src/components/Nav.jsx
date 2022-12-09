import styled from 'styled-components'
import SearchBar from "./SearchBar";
import { NavLink } from 'react-router-dom';

const NavStyled = styled.nav`
    padding-top: 15px;
    width: 100vw;
    height: 65px;
    background-color: #890AA8;
    position: fixed;
    box-shadow: 0px 6px 12px #00000029;
    z-index: 2;
`;
export default function Nav(props) {
    return (
    <NavStyled>
        <NavLink to="/home"><button>Home</button></NavLink>
        <NavLink to="/about"><button>About</button></NavLink>
        <button onClick={() => props.onRandom()}>random</button>
        <SearchBar onSearch={props.onSearch}/>
    </NavStyled>)
}