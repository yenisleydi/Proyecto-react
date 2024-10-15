import React from 'react'

export const SegundoComponente = () => {
   // const libros = ["Harry potter","Juego de tronos", "Clean code"];
  const libros =[];
   return (
    <div className='segundo-componente'>
        <h1>Listado de los libros</h1>
        {libros.length >=1 ?
        (
            <ul>
                {
                    libros.map((libros, indice) =>{
                        return <li key={indice}>{libros}</li>;
                    })
                }
            </ul>)
            :(<p>No hay libros</p>)
        }   
    </div>
  )
}
