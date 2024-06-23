import '../css/NavBar.css';
function NavBar(){
    return(
        <div className='navbar'>
            <div id="branding">
                <h1>Sneakr.</h1>
            </div>
            <input id="search-bar" type="text" placeholder="Search for brand, color, etc."></input>
                <nav>
                    <ul className="navbar-links">
                        <li><a href="/news/">News</a></li>
                        <li><a href="/about/">About</a></li>
                        <li><a href="/help/">Help</a></li>
                        <li><a href="/sell/">Sell</a></li>
                    </ul>
                </nav>
                <button className="login button">Login</button>
                <button className="signup button">Sign Up</button>  
        </div>
    )
}

export default NavBar;