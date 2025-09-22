import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Hábitos</NavLink>
        <NavLink to="/nuevo-habito">Nuevo Hábito</NavLink>
        <NavLink to="/reporte">Reporte</NavLink>
      </nav>
    </header>
  )
}

export default Header