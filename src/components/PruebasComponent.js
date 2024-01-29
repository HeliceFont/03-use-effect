import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState ("Luis Manuel");
    const [fecha, setFecha] = useState ("28/02/1995");
    const [contador, setContador] = useState (0)
    
    const modUsuario = e =>{
      setUsuario(e.target.value);
      setContador(e.target.value.length);
      ;
    }
  
  const cambiarFecha = e =>{
    setFecha( new Date().toLocaleString());
  }
// [] use effect Solo se ejecuta una vez, al cargar el componente []**
  useEffect(()=>{
    console.log ("has cargado el componente pruebasComponent!!");
  }, [])
  // Se ejecuta solo si cambio el usuario
  useEffect(()=>{
    setContador (contador);
    console.log("contador"+ contador)
  }, [contador])
  

  return (
    <div>
        <h1>El efecto - Hook UseEffect</h1>
        
        <strong className='label'>{usuario}</strong>
        <strong className='label-green'>{fecha} </strong>

        <p>
          <input type="text"
                  onChange={ modUsuario} 
                  placeholder='Cambia el nombre'
          />
          <button onClick={cambiarFecha}>cambiar fecha</button>
        </p>
        {/* condicional en la vista del componente */}
        {usuario === "LUIS" && <AvisoComponent/>}
    </div>
  )
}
