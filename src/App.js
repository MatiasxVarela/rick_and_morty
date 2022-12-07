import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters from './data.js'
import Nav from './components/Nav'

function App () {

  
  const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  };
  const [characters, setCharacters] = useState([])

  function onSearch(character) {
   fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
}
  const alerta = () => {alert(characters.personajes)}


  return (
    <div className='App'>
      <div id="divNav">
        <Nav onSearch={onSearch}/>
      </div>
      <div id="divCharacters">
        <Cards
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App
