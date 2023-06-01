/* eslint-disable react/prop-types */


const Formulario = ({setNombre,setMusica,handleSubmit}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
        <label> Nombre: </label>
        <input className='input' type="text" onChange={(e)=> setNombre(e.target.value)}/>
        <label >Genero musical(minimo 6 letras):  </label>
        <input className='input' type="text" onChange={(e)=> setMusica(e.target.value)} />

        <button className="boton">Mostrar Tarjeta</button>
    </form>
  )
}

export default Formulario