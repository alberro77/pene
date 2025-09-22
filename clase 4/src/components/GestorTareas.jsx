import Header from './Header'
import NuevaTarea from './NuevaTarea'
import Tareas from './Tareas'
import { useEffect, useState } from 'react'
import { KEY_TAREAS } from '../helpers/constants'
import { actualizarLocalStorage } from '../helpers/utils'

function GestorTareas() {
    //obtener una variable de localstorage
    const tareasEnLocalSotrage = localStorage.getItem(KEY_TAREAS);
    // si tiene algo, la parseo a json, sino uso un array vacio
    const tareasIniciales = tareasEnLocalSotrage ? JSON.parse(tareasEnLocalSotrage) : [];
    console.log(tareasEnLocalSotrage)
    const [tareas, setTareas] = useState(tareasIniciales)

    //use effect que en cada cambio de tareas, actualize local storage de tareas
    useEffect(() => {
        //actualizar local storage
        actualizarLocalStorage(KEY_TAREAS, tareas)
    }, [tareas])

    return (
        <>
            <Header />
            <NuevaTarea setTareas={setTareas} tareas={tareas} />
            <Tareas setTareas={setTareas} tareas={tareas} />
        </>
    )
}

export default GestorTareas
