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
                    <li>
                        link1
                    </li>
                    <li>
                        link2
                    </li>
                    <li>
                        link3
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;