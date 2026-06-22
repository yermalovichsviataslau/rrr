import { useState } from "react";

function ShopBasket() {
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
  };

  const addOneItem = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, count: item.count + 1 }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

    const clear = () => {
    setCart([])
  };

  return (
    <div>
      <h3>Shop Basket</h3>
      {cart.map((item) => {
        return (
          <div key={item.id} style={style}>
            <p>
              {item.title} (Кол-во: {item.count})
            </p>
            <button onClick={() => addOneItem(item.id)}>+1</button>
            <button onClick={() => deleteItem(item.id)}>delete</button>
            
          </div>
        );
      })}
      <button onClick={clear}>Кнопка "Очистить корзину"</button>
    </div>
    
  );
}

export default ShopBasket;