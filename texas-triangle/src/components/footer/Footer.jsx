import "./footer.css"
import logo from "../../assets/texas-triangle.png"

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-logo">
                <h1>
                    <a href={logo}>
                        <img src="texas-triangle\src\assets\texas-triangle.png" alt="Texas Triangle" className=""/>
                    </a>
                </h1>
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