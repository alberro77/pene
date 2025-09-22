import { useState } from "react"
// import { actualizarLocalStorage } from "../helpers/utils";
// import { KEY_TAREAS } from "../helpers/constants";

const NuevaTarea = (props) => {
    const {tareas, setTareas} = props;
    const [nombre, setNombre] = useState("")

    const agregarTarea = ()=>{
        const nuevaTarea ={
            id: tareas.at(-1)?.id + 1 || 0,
            nombre: nombre,
            completado: false,
        }
        const nuevasTareas = [...tareas, nuevaTarea];
        setTareas(nuevasTareas)
        // actualizarLocalStorage(KEY_TAREAS, nuevasTareas)
    }

  return (
    <div>
        <input type="text" onChange={(e)=>setNombre(e.target.value)} />
        <input type="button" value="Agregar" onClick={agregarTarea} />
    </div>
  )
}

export default NuevaTarea