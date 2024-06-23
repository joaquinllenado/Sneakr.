import ShoeCard from "./ShoeCard";
import "../css/Row.css";

function Row(shoes){
    const thumbnails = {};
    const names = {};
    const price = {};
    for(const i in shoes){
        let x = shoes[i]
        thumbnails[i] = []
        names[i] = []
        price[i] = []
        for(const j = 0; j > 6; j++){
            thumbnails[i].push(x[j].thumbnail);
            names[i].push(x[j].shoeName);
            price[i].push(x[j].retailPrice);
        }
        console.log(`Success ${i}`)        
    }

    return(
        <div className="row">
            <ShoeCard 
                thumbnail={thumbnails[0]} 
                name={names[0]}
                price={price[0]}
            />
            <ShoeCard 
                thumbnail={thumbnails[1]} 
                name={names[1]}
                price={price[1]}
            />
            <ShoeCard 
                thumbnail={shoes[2]?.thumbnail} 
                name={shoes[2]?.name}
                price={shoes[2]?.retailPrice}
            />
            <ShoeCard 
                thumbnail={shoes[3]?.thumbnail} 
                name={shoes[3]?.name}
                price={shoes[3]?.retailPrice}
            />
            <ShoeCard 
                thumbnail={shoes[4]?.thumbnail} 
                name={shoes[4]?.name}
                price={shoes[4]?.retailPrice}
            />
            <ShoeCard 
                thumbnail={shoes[5]?.thumbnail} 
                name={shoes[5]?.name}
                price={shoes[5]?.retailPrice}
            />
        </div>
    )
}

export default Row;