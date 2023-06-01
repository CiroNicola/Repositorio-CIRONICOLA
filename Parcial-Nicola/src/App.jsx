import { useState } from 'react'

import './App.css'
import Card from './components/Card'
import Formulario from './components/Formulario'
function App() {
  
  const [nombre,setNombre] = useState('')
  const [musica,setMusica] = useState('')
  const [mostrar,setMostrar] = useState(false)
  const [error,setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nombre.length >= 3 && nombre.trim(nombre) == nombre  && musica.length >= 6) {
      setMostrar(true)
      setError(false)
    }else{
      setMostrar(false)
      setError(true)
      setError('La info es incorrecta') 
    }
  }
  return (
    <>
      <Formulario handleSubmit={handleSubmit}  setNombre={setNombre} setMusica={setMusica}/>
      {mostrar &&< Card nombre={nombre} musica={musica} error={error} /> }
      {error && <h3 className="error">{error}</h3>}
    </>
  )
}
export default App