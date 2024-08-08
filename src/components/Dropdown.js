import "../css/Dropdown.css";

function Dropdown() {
    return(
        <div className="dropdown">
            <ul id="dropdown-list">
                <li id="dropdown-item"><a href="/browse/mostpopular/">Most Popular</a></li>
                <li id="dropdown-item"><a href="/browse/jordan/">Jordan</a></li>
                <li id="dropdown-item"><a href="/browse/nike/">Nike</a></li>
                <li id="dropdown-item"><a href="/browse/newbalance/">New Balance</a></li>
                <li id="dropdown-item"><a href="/browse/adidas/">Adidas</a></li>
                <li id="dropdown-item"><a href="/browse/puma/">Puma</a></li>
                <li id="dropdown-item"><a href="/browse/converse/">Converse</a></li>
            </ul>
        </div>
    )
}

export default Dropdown;