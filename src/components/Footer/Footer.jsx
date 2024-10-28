import './Footer.scss'
import logo from '../images/footer-logo.svg'


function Footer() {
    return (
        <div className="footer">
            <img src={logo} alt="Logo Kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer