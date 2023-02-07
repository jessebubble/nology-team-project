import "./navbar.css"

const NavBar = () => {

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Texas Triangle</h1>
            </div>
            <div className="navbar-links">
                <ul>
                    <li>
                        Dev1
                    </li>
                    <li>
                        Dev2
                    </li>
                    <li>
                        Dev3
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;