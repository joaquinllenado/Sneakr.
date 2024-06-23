import "../css/Dropdown.css";

function Dropdown() {
    return(
        <div className="dropdown">
            <ul id="dropdown-list">
                <li id="dropdown-item"><a href="/browse/brands/">Brands</a></li>
                <li id="dropdown-item"><a href="/browse/deals/">Deals</a></li>
                <li id="dropdown-item"><a href="/browse/new/">New</a></li>
                <li id="dropdown-item"><a href="/browse/men/">Men</a></li>
                <li id="dropdown-item"><a href="/browse/women/">Women</a></li>
                <li id="dropdown-item"><a href="/browse/kids/">Kids</a></li>
                <li id="dropdown-item"><a href="/browse/sneakers/">Sneakers</a></li>
                <li id="dropdown-item"><a href="/browse/shoes/">Shoes</a></li>
                <li id="dropdown-item"><a href="/browse/apparel/">Apparel</a></li>
                <li id="dropdown-item"><a href="/browse/accessories/">Accessories</a></li>
                <li id="dropdown-item"><a href="/browse/">More Categories</a></li>
            </ul>
        </div>
    )
}

export default Dropdown;