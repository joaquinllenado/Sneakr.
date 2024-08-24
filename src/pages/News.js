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
                description="Nike and Kobe Bryant had a partnership unlike any other. We go into Kobe's sneaker journey and what's next to come from the Swoosh in our Nike Kobe Shoes Buyer's Guide."
            />
            <NewsCard 
                reversed={true} 
                thumbnail={image2}
                title="Buyer's Guide: Jordan Shoes"
                description="Before buying a pair of Air Jordan 1s, dive into our Buyer's Guide to get familiar with the sneaker's long and colorful history."
            />
            <NewsCard 
                reversed={false} 
                thumbnail={image3}
                title="Buyer's Guide: Yeezy Shoes"
                description="Adidas' collaboration with Yeezy has redefined the sneaker landscape, blending cutting-edge design with cultural influence. The partnership has produced iconic, sought-after shoes that continue to make waves in the fashion and footwear industries."
            />
        </div>
    )
}

export default News;