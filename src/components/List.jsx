export default function List({ arr, onClick }) {
  return (
    <>
      {arr.map((item) => (
        <li key={item.id}>
          {!item.exclamationMark ? item.value : `!!!${item.value}`}
          <br />
          <button onClick={() => onClick(item.id)}>
            add !!! in before value
          </button>
        </li>
      ))}
    </>
  );
}