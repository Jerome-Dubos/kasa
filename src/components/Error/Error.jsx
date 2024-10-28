import './Error.scss'
import { Link } from 'react-router-dom'
import erreur from '../images/404.png'
import  Header  from '../Header/Header.jsx'
import  Footer  from '../Footer/Footer.jsx'

function Error() {
    return (
      <main>
      <Header />
      <div className="error-container">
      <img src={erreur} alt="Erreur 404" />
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link className='retour' to="/">Retourner sur la page d’accueil</Link>
      </div>
      <Footer />
      </main>
    )
  }
  
  export default Error