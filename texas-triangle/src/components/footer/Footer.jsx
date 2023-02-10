import "./footer.css"
import {ReactComponent as FooterLogo} from "../../assets/texas-triangle.svg"

const Footer = () => {

    return (
        <footer className="footer">
            <div>
                <FooterLogo className="footer-logo"/>
            </div>
            <div className="footer-links">
                <ul>
                    <li className="footer-item">
                        <a href="https://github.com/jessebubble">
                        <img src="https://ca.slack-edge.com/TCRAX8NTH-U045S0VUEBG-d48144caa2fd-512" alt="Jesse Hernandez"
                        className="footer-img"/>Jesse Hernandez
                        </a>
                    </li>
                    <li className="footer-item">
                        <a href="https://github.com/blackblizz">
                        <img src="https://ca.slack-edge.com/TCRAX8NTH-U04612YAKTN-7781701c7fca-512" alt="Cassidy Ng"
                        className="footer-img"/>Cassidy Ng
                        </a>
                    </li>
                    <li className="footer-item">
                        <a href="https://github.com/BenjiCollege">
                        <img src="https://ca.slack-edge.com/TCRAX8NTH-U045VL92B29-59dec0aaa52b-512" alt="Gerardo Colegio" className="footer-img"/>Gerardo Colegio
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;