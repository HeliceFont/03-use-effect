/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'


export const AjaxComponent = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true)
    const [errores, setErrores] = useState("")
//Funcion generica o basica
// const getUsuariosEstaticos =() =>{
//     setUsuarios([
//         {
//             "id":1,
//             "email":"michael.lawson1@reqres.in",
//             "first_name":"Michaelp",
//             "last_name":"Lawsond",
            
//         },
//         {
//             "id":2,
//             "email":"lindsay.ferguson1@reqres.in",
//             "first_name":"Lindsayl",
//             "last_name":"Fergusone",
            
//         },
//         {
//             "id":3,
//             "email":"tobias.funkew@reqres.in",
//             "first_name":"Tobiasw",
//             "last_name":"Funkew",
            
//         }
//     ])
// }
const getUsuariosAW = () =>{
    
        // setTimeout Para añadirle un pequeño delay de 2 segundos
    setTimeout(async() => {
        try{
        const peticion = await fetch("https://reqres.in/api/users?page=1")
        const {data} = await peticion.json()
        setUsuarios(data)
        setCargando(false)
    } catch(error){
        console.log(error)
        setErrores(error.message)
    }
    }, 2000);
    
    
    
}
// const getUsuariosAjaxPms = () =>{
//     fetch("https://reqres.in/api/users?page=2")
//     .then(response => response.json())
//     .then(resultado_final =>{
//             setUsuarios(resultado_final.data)
//             console.log(usuarios)
//         },
//         error=>{
//             console.log(error)
//         })
// }

useEffect(()=>{
    //getUsuariosAjaxPms();

    getUsuariosAW();
},[])

if(errores !== ""){
    //Cuando pasa algun error
    return (
        <div className='errores'>   
            {errores}
        </div>
        )

}else if(cargando === true ) {
    //cuando esta todo cargando
return (
    <div className='cargando'>   
        Cargando datos...
    </div>
    )
}else if(cargando === false && errores === ""){

    //Cuando todo ha ido bien 
    return (
        <div>
            <h2>Listado de usuarios vía Ajax</h2>
            <ol className='usuarios'>
                {
                    usuarios.map(usuario =>{
                        console.log(usuario)
                        return (<li key={usuario.id}>
                            <img src={usuario.avatar} width="40"></img>
                            &nbsp;
                            {usuario.first_name} {usuario.last_name}</li>)
                    })
                }
            </ol>
        </div>
    )
}

}


