import styled from 'styled-components'
import SearchBar from "./SearchBar";

const NavStyled = styled.nav`
    width: 100vw;
    height: 65px;
    background-color: red;
    position: fixed;
    z-index: 2;
`;
export default function Nav(props) {
    return (
    <NavStyled>
        <button onClick={() => props.onRandom()}>random</button>
        <SearchBar onSearch={props.onSearch}/>
    </NavStyled>)
}