import { memo } from "react";

const CardItem = ({id, title, count, addItem, deleteItem}) => {
  return (
    <div
      key={id}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <p>
        {title} (Кол-во: {count})
      </p>
      <button onClick={() => addItem(id)}>+1</button>
      <button onClick={() => deleteItem(id)}>delete</button>
    </div>
  );
};

export default memo(CardItem);
