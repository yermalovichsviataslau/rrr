import { useCallback, useState } from "react";
import CardItem from "./CardItem";

function ShopBasket() {
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);

  const addItem = useCallback((id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item,
      ),
    );
  }, []);

  const deleteItem = useCallback((id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }, []);

  const clear = () => {
    setCart([]);
  };

  return (
    <div>
      <h3>Shop Basket</h3>
      {cart.map((item) => (
        <CardItem
          key={item.id}
          id={item.id}
          title={item.title}
          count={item.count}
          addItem={addItem}
          deleteItem={deleteItem}
        />
      ))}
      <button onClick={clear}>Кнопка "Очистить корзину"</button>
    </div>
  );
}

export default ShopBasket;
