// import { KEY_TAREAS } from "../helpers/constants";
// import { actualizarLocalStorage } from "../helpers/utils";
import { useState } from "react";
import { KEYS_ESTADOS } from "../helpers/constants";

const Tareas = (props) => {
    const { tareas, setTareas } = props;
    const [inputBusqueda, setInputBusqueda] = useState("")
    const [selectCompletado, setSelectCompletado] = useState(KEYS_ESTADOS.TODAS)

    const eliminarTarea = (id) => {
        //sacar la tarea del array de tareas
        const tareasFiltradas = tareas.filter((tarea) => tarea.id !== id)
        //setearlo en el useState
        setTareas(tareasFiltradas)
        // actualizarLocalStorage(KEY_TAREAS, tareasFiltradas)
    }

    const cambiarEstado = (id) => {
        const tareasActualizadas = tareas.map((tarea) => {
            if (tarea.id === id) {
                return { ...tarea, completado: !tarea.completado }
            }
            return tarea
        })
        //seteamos en el useState
        setTareas(tareasActualizadas)
        // actualizarLocalStorage(KEY_TAREAS, tareasActualizadas)
    }

    //filtros en tareas
    // filtro por estado
    const tareasFiltradasPorEstado = tareas.filter((tarea)=>{
        //si selectcompeltados es "TODAS", devolvemos todas
        if(selectCompletado === KEYS_ESTADOS.TODAS) return true
        // si select completado es "PENDIENTES" devolvemos las que tarea.completado === false, osea que !tarea.completado
        if(selectCompletado === KEYS_ESTADOS.PENDIENTES) return !tarea.completado 
        //si selecte completado es "COMPLETADAS", devolvemos las que tarea.completado === true, osea que tarea.completado
        if(selectCompletado === KEYS_ESTADOS.COMPLETADAS) return tarea.completado
    })

    //filtro por input de texto
    const tareasFiltradas = tareasFiltradasPorEstado.filter((tarea)=>tarea.nombre.includes(inputBusqueda));

    return (
        <>
            <input type="text" placeholder="Buscar por nombre" value={inputBusqueda} onChange={(e)=>setInputBusqueda(e.target.value)} />
            <select value={selectCompletado} onChange={(e)=>setSelectCompletado(e.target.value)} >
                <option value={KEYS_ESTADOS.TODAS}>Todas</option>
                <option value={KEYS_ESTADOS.COMPLETADAS}>Completadas</option>
                <option value={KEYS_ESTADOS.PENDIENTES}>Pendientes</option>
            </select>
            <h2>Tareas</h2>
            {tareasFiltradas.map((tarea) => (
                <article key={tarea.id} className={tarea.completado ? "completado" : "pendiente"}>
                    <input type="checkbox" checked={tarea.completado} onChange={() => cambiarEstado(tarea.id)} />
                    <p>{tarea.nombre}</p>
                    <p>{tarea.completado ? "Completada!" : "Pendiente"}</p>
                    <button onClick={() => eliminarTarea(tarea.id)}>X</button>
                </article>
            )
            )}
            {/* {tareasFiltradas.length === 0 ?   <p>No hay tareas</p> : null} */}
            {tareasFiltradas.length === 0 && tareas.length>0 &&  <p>No hay tareas con esos filtros.</p> }
            {tareas.length === 0 &&   <p>No hay tareas.</p> }
        </>
    )

}

export default Tareas