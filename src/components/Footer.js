import "../css/Footer.css"
import ReactLogo from "../images/React-logo.svg"
import NodeLogo from "../images/Node-logo.svg"
import ExpressLogo from "../images/Express-logo.svg"
import JSLogo from "../images/Javascript-logo.svg"
import HTMLLogo from "../images/HTML-logo.svg"
import CSSLogo from "../images/CSS-logo.svg"

function Footer() {
    return(
        <div className="footer">
            <p>Built by Joaquin Llenado</p>
            <ul className="logos">
                <li><img src={ReactLogo} alt="React Logo"></img></li>
                <li><img src={NodeLogo} alt="Node Logo"></img></li>
                <li><img src={ExpressLogo} alt="Express Logo"></img></li>
                <li><img src={JSLogo} alt="Javascript Logo"></img></li>
                <li><img src={HTMLLogo} alt="HTML Logo"></img></li>
                <li><img src={CSSLogo} alt="CSS Logo"></img></li>
            </ul>
        </div>
    )
}

export default Footer;