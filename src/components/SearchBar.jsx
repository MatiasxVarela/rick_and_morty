import { useState } from 'react'
export default function SearchBar(props) {
   
   const [inputValue, setValue]  = useState({
      value: ""
   })

   const handleChange = (e) => {
      setValue({...inputValue, [e.target.name]: e.target.value})
   }
   const devuelveValor = () => {console.log(inputValue.value)}
   return (
      <div>
         <input name="value" type='search' onChange={handleChange} value={inputValue.value}/>
      <button onClick={() => props.onSearch(inputValue.value)}>Agregar</button>
      </div>
   );
}