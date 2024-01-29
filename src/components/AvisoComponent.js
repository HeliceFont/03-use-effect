import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(()=>{
        //Se detecta cuando se monta el componente
        alert("El componente AvisoComponent está montado");
        //cuado el componente se desmont
        return()=>{
            alert("COMPONENTE DESMONTADO");
        };
    }, []);//Se ejecuta una vez porque le paso el array vacio []

  return (
    <div>
        <hr/>
        <h3>Saludos Luis ¿Que tal estás?</h3>
        <button onClick={e =>{
            alert("Bienvenido!");
        }}>Mostrar algo</button>
    </div>
  )
}
