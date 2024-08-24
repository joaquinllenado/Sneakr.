import NewsCard from "../components/NewsCard";
import image1 from "../images/kobe-ad.png";
import image2 from "../images/jordan-ad.jpg";
import image3 from "../images/yeezy-ad.jpg";

function News(){
    return(
        <div>
            <NewsCard 
                reversed={false} 
                thumbnail={image1}
                title="Buyer's Guide: Nike Kobe Shoes"
                description="Dive into Kobe Bryant's legendary sneaker journey with Nike, where style met performance in game-changing ways. This guide takes you through the iconic kicks that defined Kobe's legacy and left a lasting mark on pop culture."
            />
            <NewsCard 
                reversed={true} 
                thumbnail={image2}
                title="Buyer's Guide: Jordan Shoes"
                description="Step into the world of Jordan, where basketball meets street style in the most iconic way. This guide uncovers the must-have kicks that have defined sneaker culture and kept Michael Jordan's legacy alive in every step."
            />
            <NewsCard 
                reversed={false} 
                thumbnail={image3}
                title="Buyer's Guide: Yeezy Shoes"
                description="Unlock the hype behind Yeezy, the fusion of Kanye West's visionary style and cutting-edge design. This guide walks you through the must-have Yeezy kicks that have redefined sneaker culture and become a global phenomenon."
            />
        </div>
    )
}

export default News;