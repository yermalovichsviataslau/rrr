function ChildComponent ({text, count}){
return (
  <div>
    <p>Привет, {text}! Текущий счетчик: {count}</p>
  </div>
)
}

export default ChildComponent