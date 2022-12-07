import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters from './data.js'
import Nav from './components/Nav'

function App () {

  
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

  return (
    <div className='App'>
      <div id="divNav">
        <Nav onSearch={onSearch} onRandom={onRandom}/>
      </div>
      <div id="divCharacters">
        <Cards
          onClose={onClose}
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App
