import { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import About from './components/About/About'
import Form from './components/Form'

function App () {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '1password';

  function login(userData) {
    if (userData.password === password && userData.username === username) {
        setAccess(true);
        navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);


  const [characters, setCharacters] = useState([])

  const onSearch = (character) => {
    if(characters.filter( chac => chac.id == character).length == 0){
        fetch(`https://rickandmortyapi.com/api/character/${character}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.name) {
                setCharacters((oldChars) => [...oldChars, data]);
            } else {
                window.alert('No hay personajes con ese ID');
            }
            });
        } else {
          alert("Ya tienes esa carta")
        }
      }
      
  const onClose = (e) => {
   setCharacters(characters.filter((chac) => chac.id != e))
    }

  const onRandom = () => {
    let numeroRandom = Math.round(Math.random() * 826);
    onSearch(numeroRandom)
  }

  let dondeEstoy = useLocation().pathname

  return (
    <div className='App'>
      {dondeEstoy !== "/" &&(<div id="divNav">
        <Nav onSearch={onSearch} onRandom={onRandom}/>
      </div>)}
      <Routes>
        <Route path="/home" element={<div id="divCharacters"><Cards onClose={onClose} characters={characters} /></div>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/" element={<Form login={login}/>}/>
      </Routes>
    </div>
  )
}

export default App
