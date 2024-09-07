import "../css/About.css";
import Jordan1 from "../images/Jordan1.png"
import AboutCard from "../components/AboutCard";

function About(){
    return(
        <>
            <div className="aboutSection">
                    <div className="aboutMain">
                        <h1 className="about1">Welcome to
                            <br></br>
                            <span className="about2">Sneakr.</span>
                        </h1>
                        <img src={Jordan1} alt="Jordan 1 sneaker"/>
                    </div>

            </div>
            <div className="aboutCards">
                <AboutCard title="Discover Sneakr." content="Your go-to platform for finding the best sneaker deals. We aggregate real-time data from StockX, Goat, and Flight Club to ensure you always get the lowest price."/>
                <AboutCard title="How Sneakr. Works" content="Powered by Sneaks-API, Sneakr. pulls the latest prices from multiple reseller sites and brings them all together on one seamless platform. Our tech does the hard work, so you can shop smarter and faster." />
                <AboutCard title="Sneaks-API at the Core" content="Sneakr. is driven by the powerful Sneaks-API, which pulls detailed sneaker data directly from StockX, Goat, and Flight Club. This ensures that you’re always seeing the best deals available, updated in real-time." />
                <AboutCard title="Why Sneakr.?" content="Sneakr. was built with sneakerheads in mind. Our platform is designed to make it easier than ever to find the best deals across multiple reseller platforms, all in one place. Get the kicks you want without the hassle." />
                <AboutCard title="Built by Joaquin Llenado" content="Sneakr. is my take on StockX, tailored for more options and better deals. As a sneaker enthusiast and tech developer, I’ve combined my passion for kicks with my technical expertise to create a platform that’s fast, reliable, and user-friendly." />
            </div>
        </>
    )
}

export default About;