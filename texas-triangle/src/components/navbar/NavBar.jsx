import "./navbar.css"
import Filter from "../filter/Filter.jsx"

const NavBar = (props) => {
    const {setAustin, setDallas, setHouston, setSanAntonio, austin, dallas, 
            houston, sanAntonio} = props;

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Texas Triangle</h1>
            </div>
            <div className="navbar-filters">
                <Filter
                id="1"
                title="Austin"
                setCheck={setAustin}
                check={austin}
                />
                <Filter
                id="2"
                title="Dallas-Fort Worth"
                setCheck={setDallas}
                check={dallas}
                />
                <Filter
                id="3"
                title="Houston"
                setCheck={setHouston}
                check={houston}
                />
                <Filter
                id="4"
                title="San Antonio"
                setCheck={setSanAntonio}
                check={sanAntonio}             
                />
                    
            </div>
        </nav>
    );
}

export default NavBar;