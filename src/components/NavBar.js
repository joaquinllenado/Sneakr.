import '../css/NavBar.css';
function NavBar(){
    return(
        <div className='navbar'>
            <div id="branding">
                <h1>
                    <span className="letter">S</span>
                    <span className="letter">n</span>
                    <span className="letter">e</span>
                    <span className="letter">a</span>
                    <span className="letter">k</span>
                    <span className="letter">r</span>
                    <span className="letter">.</span>
                </h1>
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