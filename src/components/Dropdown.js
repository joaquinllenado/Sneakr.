import "../css/Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown() {
    return(
        <div className="dropdown">
            <ul id="dropdown-list">
                <li id="dropdown-item"><Link to="/mostpopular">Most Popular</Link></li>
                <li id="dropdown-item"><Link to="/jordan">Jordan</Link></li>
                <li id="dropdown-item"><Link to="/nike">Nike</Link></li>
                <li id="dropdown-item"><Link to="/newbalance">New Balance</Link></li>
                <li id="dropdown-item"><Link to="/adidas">Adidas</Link></li>
                <li id="dropdown-item"><Link to="/puma">Puma</Link></li>
                <li id="dropdown-item"><Link to="/crocs">Crocs</Link></li>
                <li id="dropdown-item"><Link to="/converse">Converse</Link></li>
                <li id="dropdown-item"><Link to="/hoka">Hoka</Link></li>
                <li id="dropdown-item"><Link to="/on">On</Link></li>
            </ul>
        </div>
    )
}

export default Dropdown;