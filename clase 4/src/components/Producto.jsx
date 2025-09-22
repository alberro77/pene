import { useParams } from "react-router"
import { useNavigate } from "react-router";

const Producto = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    //navigate("/contacto")
    //  pagina anterior 
    //navigate(-1)
    //  pagina sigueinte
    //navigate(1)
    const eliminarProducto =()=>{
        //toda la logica para eliminar

        //enviamos al usuario a la pagina de inicio
        navigate("/")
    }

    return (
        <>
            <p>Producto - {id}</p>
            <button onClick={eliminarProducto}>Eliminar</button>
            <button onClick={()=>navigate(-1)}>Ir un paso atras</button>
            <button onClick={()=>navigate(1)}>Ir un paso adelante</button>
        </>
    )
}

export default Producto