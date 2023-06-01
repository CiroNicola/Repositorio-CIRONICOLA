/* eslint-disable react/prop-types */


const Card = ({nombre , musica}) => {

  console.log(nombre, musica);

  return (
    <div className="card">              
        
        <h1> Tu nombre es: {nombre}</h1>
        <h2> Tu musica preferida: {musica}</h2>
        <h2>Gracias por la info</h2>    
        

    </div>
  )
}

export default Card