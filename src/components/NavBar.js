import { useState } from 'react';
import '../css/NavBar.css';
import Menu
 from './Menu';
function NavBar(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return(
        <div className='navbar'>
            <div className="menu" onClick={toggleMenu}>
                <Menu isOpen={menuOpen} />
            </div>
            <div id="branding">
                <a href="/">
                    <h1>
                        <span className="letter">S</span>
                        <span className="letter">n</span>
                        <span className="letter">e</span>
                        <span className="letter">a</span>
                        <span className="letter">k</span>
                        <span className="letter">r</span>
                        <span className="letter">.</span>
                    </h1>
                </a>
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