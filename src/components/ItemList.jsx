import { memo, useMemo } from "react";

const ItemList = ({ items, val }) => {

  const filteredItems = useMemo(()=> {
    if(!val.trim()) return items

    return items.filter((item)=> item.value.toLowerCase().includes(val.toLowerCase()))
  }, [items, val])

  return (
    <ul>
      {filteredItems.map((item) => (
        <li key={item.id}>{item.value}</li>
      ))}
    </ul>
  );
};

export default memo(ItemList);
