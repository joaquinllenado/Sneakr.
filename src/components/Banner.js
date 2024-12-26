import "../css/Banner.css";
import banner from "../images/puma_brandbanner_1600x400 (1).png";

function Banner(){
    return(
        <a className="banner-link" href="https://us.puma.com/us/en">
            <img className="banner" src={banner} alt="Puma Banner"/>
        </a>
    )
}

export default Banner;