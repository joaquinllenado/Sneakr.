import { useEffect, useState } from 'react';
import '../css/NavBar.css';
import Menu from './Menu';
import searchButton from "../images/Search.png"
import { Link, useNavigate } from 'react-router-dom';

function NavBar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen)
    };

    const handleSearch = () => {
        navigate(`/search?q=${query}`);
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [menuOpen])

    

    return(
        <div className='navbar'>
            <div className="menu" onClick={toggleMenu}>
                <Menu isOpen={menuOpen} />
            </div>
            <div id="branding">
                <Link to="/">
                    <h1>
                        <span className="letter" style={{ animationDelay: '0s' }}>S</span>
                        <span className="letter" style={{ animationDelay: '0.3s' }}>n</span>
                        <span className="letter" style={{ animationDelay: '0.6s' }}>e</span>
                        <span className="letter" style={{ animationDelay: '0.9s' }}>a</span>
                        <span className="letter" style={{ animationDelay: '1.2s' }}>k</span>
                        <span className="letter" style={{ animationDelay: '1.5s' }}>r</span>
                        <span className="letter" style={{ animationDelay: '1.8s' }}>.</span>
                    </h1>
                </Link>
            </div>
            <input 
                id="search-bar" 
                type="text" 
                placeholder="Search for brand, color, etc."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key ==="Enter")
                        handleSearch();
                }}
            />
            <div id="links-and-buttons">
                <nav>
                    <ul className="navbar-links">
                        <li><a href="/news/">News</a></li>
                        <li><a href="/about/">About</a></li>
                        <li><a href="/help/">Help</a></li>
                        <li><a href="/sell/">Sell</a></li>
                    </ul>
                </nav>
                <div id="buttons">
                    <button className="login button">Login</button>
                    <button className="signup button">Sign Up</button>  
                </div>
            </div>

            <div className="search-bar-small" onClick={toggleSearch}>
                <img src={searchButton} alt="search"/>
            </div>

            <style jsx>{`
                @media (max-width: 767px){
                    #links-and-buttons{
                        display: ${menuOpen ? "flex" : "none"};
                    }
                    
                    #search-bar{
                        display: ${searchOpen ? "flex" : "none"};
                    }

                    .menu{
                        display: ${searchOpen ? "none" : "flex"};
                    }
                }
            `}</style>
        </div>

        
    )
}

export default NavBar;