import { NavLink } from 'react-router-dom'
import '../Header/index.scss'
import logo from '../images/logo.svg'


function Header() {
  return (
    <nav>
      <div>
      <img src={logo} alt="Logo Kasa" />
      </div>
      <ul>
        <NavLink to="/" activeclassname="active">Accueil</NavLink>
        <NavLink to="/about" activeclassname="active">A Propos</NavLink>
      </ul>
    </nav>
  )
}

export default Header