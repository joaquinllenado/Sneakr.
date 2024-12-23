import { useState } from 'react';
import '../css/NavBar.css';
import searchButton from "../images/Search.png"
import { Link, useNavigate } from 'react-router-dom';
import GitHub_Logo from '../images/github-mark.svg';
import { Cross as Hamburger } from 'hamburger-react';

function NavBar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const toggleSearch = () => {
        setSearchOpen(!searchOpen)
    };

    const handleSearch = () => {
        navigate(`/search?q=${query}`);
    };

    return(
        <div className='navbar'>
            <div id='navbar-items'>
                <div id='hamburger-menu'>
                    <Hamburger size={35} toggled={menuOpen} toggle={setMenuOpen}/>
                    {menuOpen && (
                        <div id="hb-items">
                            <ul id="dropdown-list-hb">
                                <li id="dropdown-item-hb"><Link to="/mostpopular">Most Popular</Link></li>
                                <li id="dropdown-item-hb"><Link to="/jordan">Jordan</Link></li>
                                <li id="dropdown-item-hb"><Link to="/nike">Nike</Link></li>
                                <li id="dropdown-item-hb"><Link to="/newbalance">New Balance</Link></li>
                                <li id="dropdown-item-hb"><Link to="/adidas">Adidas</Link></li>
                                <li id="dropdown-item-hb"><Link to="/puma">Puma</Link></li>
                                <li id="dropdown-item-hb"><Link to="/crocs">Crocs</Link></li>
                                <li id="dropdown-item-hb"><Link to="/converse">Converse</Link></li>
                                <li id="dropdown-item-hb"><Link to="/hoka">Hoka</Link></li>
                                <li id="dropdown-item-hb"><Link to="/on">On</Link></li>
                            </ul>
                            <a href='https://github.com/joaquinllenado/Sneakr.'>
                                <img id='github-hb' src={GitHub_Logo} />
                            </a>
                        </div>
                    )}
                </div>
                <div id="branding" onClick={() => setQuery('')}>
                    <Link to="/">
                        <h1> Sneakr.</h1>
                    </Link>
                </div>
                <input 
                    id="search-bar" 
                    type="text" 
                    placeholder="Search for brand, color, etc."
                    aria-label="Search for shoes by brand, color, etc."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key ==="Enter")
                            handleSearch();
                    }}
                />
                <a href='https://github.com/joaquinllenado/Sneakr.'>
                    <img id='github' src={GitHub_Logo} />
                </a>
                <div className="search-bar-small" onClick={toggleSearch}>
                    <img src={searchButton} alt="Open search input"/>
                </div>
            </div>
            <style jsx>{`
                @media (max-width: 767px){                    
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