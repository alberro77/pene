import { useState, useRef } from "react"

const Formulario = () => {
    const [nombre, setNombre] =useState("")
    const [texto, setTexto] =useState("")
    const inputNombre = useRef(null)
    return (
        <section>
            <h2>Formulario</h2>
            <p>{texto}</p>
            <input type="text" placeholder="Nombre"
            onChange={(e)=>setNombre(e.target.value)} 
             ref={inputNombre} />
            <input type="button" value="Guardar" onClick={()=>setTexto(inputNombre.current.value)} disabled={!nombre} />
        </section>
    )
}

export default Formulario