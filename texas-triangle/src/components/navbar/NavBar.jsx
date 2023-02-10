import "./navbar.css"
import Filter from "../filter/Filter.jsx"

const NavBar = (props) => {
    const {setAustin, setDallas, setHouston, setSanAntonio, austin, dallas, 
            houston, sanAntonio, setCity} = props;

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
<div className="thirdperson"></div>
            <div className="city-dropdown">
                <select onChange={(e)=>{setCity(e.target.value)}}>
                    <option value="all">All</option>
                    <option value="Austin">Austin</option>
                    <option value="Dallas">Dallas-Fort Worth</option>
                    <option value="Houston">Houston</option>
                    <option value="SanAntonio">San Antonio</option>
                </select>
            </div>
        </nav>
    );
}

export default NavBar;