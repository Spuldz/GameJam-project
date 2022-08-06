import { useState } from "react";
import items from "../data/shop.json"

function Shop() {
    const [character, setCharacter] = useState(JSON.parse(localStorage.getItem("character")));
    const [playerLevel] = useState(parseInt(localStorage.getItem("level")) || null)
    const [coins, setCoins] = useState(parseInt(localStorage.getItem("coins")))

    function buy(item, price) {
        if (price > coins) {
            return alert("Not enough coins! Your coins: " + coins)
        }

        let newCoins = Math.floor(coins - price);
        setCoins(newCoins);

        switch(item) {
            case 'health':
                increaseHealth()
                break;
            case 'power':
                increasePower()
                break
            default:
                newCoins = Math.floor(coins + price)
                setCoins(newCoins); // if incident happened and no right item paassed and we just unresonably decreased coins - refund here.
                break;
        }

        setCharacter(character)

        localStorage.setItem('character', JSON.stringify(character));
        localStorage.setItem('coins', newCoins);
    }

    function increaseHealth() {
        character.hp += Math.floor(character.hp / 15)
    }

    function increasePower() {
        character.power += Math.floor(character.power / 15)
    }

    return (
      <div id="shop">
        <h1 id="shop-title">Shop</h1>
        <h1 id="myCoins">Your coins = {coins}</h1>
        <div className="items">
            {items.map((item) => {
                    let itemPrice = item.basePrice * (playerLevel * 10) / 100;

                return (
                    <div key={item.id} className="item">
                        <p>Name: {item.name}</p>
                        <p className="desc">Desc: {item.description}</p>
                        <p>Price: {Math.floor(itemPrice)}</p>
                        <div className="item-buttons">
                            <button onClick={() => buy(item.name, itemPrice)} className="item-buy">Buy</button>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    );
  }
  
  export default Shop;
  