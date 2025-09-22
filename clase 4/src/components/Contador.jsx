import { useState, useEffect } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0)
    const [todos, setTodos] = useState([])
    // let contador = 0;

    
    useEffect(()=>{
      ///cosas que queremos ejecutra
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
    },[])

    useEffect(()=>{
      document.title = `El contador esta en ${contador}`;
      console.log("estoy cambiando")
    },[contador])
 


    const sumarContador =()=>{
        // contador = contador + 1;
        setContador(contador + 1)
    }


  return (
    <>
    <h1>{contador}</h1>
    <button onClick={sumarContador} >Sumar</button>
    {/* <button onClick={()=>console.log("sumando")}>Sumar</button> */}
    </>
  )
}

export default Contador