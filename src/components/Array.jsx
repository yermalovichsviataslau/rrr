function Array({ arr }) {
  return (
    <ul>
      {arr.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}

export default Array;
