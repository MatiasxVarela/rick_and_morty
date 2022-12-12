import { useState } from 'react'
export default function SearchBar(props) {
   
   const [inputValue, setValue]  = useState({
      value: ""
   })

   const handleChange = (e) => {
      setValue({...inputValue, [e.target.name]: e.target.value})
   }
   return (
      <div>
         <input id="buscador" name="value" type='search' onChange={handleChange} value={inputValue.value}/>
      <button style={{margin:"0px 0px 0px 2px"}} onClick={() => props.onSearch(inputValue.value)}>Agregar</button>
      </div>
   );
}