import './App.css'
import GestorTareas from './components/GestorTareas'
import { Routes, Route, NavLink } from 'react-router'
import Producto from './components/Producto'
function App() {

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/tareas">Tareas</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
          <NavLink to="/producto/323">Producto 323</NavLink>
          <NavLink to="/producto/12">Producto 12</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<p>Inicio</p>} />
        <Route path='tareas' element={<GestorTareas />} />
        <Route path='contacto' element={<p>Contacto</p>} />
        <Route path='producto/:id?' element={<Producto/>}/>
        <Route path='*' element={<p>Contacto</p>} />
      </Routes>

    </>
  )
}

export default App
