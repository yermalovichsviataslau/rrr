import "./App.css";
import Array from "./components/array";
import Boolean from "./components/boolean";
import Function from "./components/function";
import Number from "./components/number";
import Object from "./components/object";
import String from "./components/String";

function App() {
  return (
    <>
      <Number num={20} />
      <String str={"Hello"} />
      <Boolean bool={true} />
      <Object user={{ name: "Sviat", age: 20 }} />
      <Function fun={()=>{ console.log('function')}}/>
      <Array arr={[1,2,3,4,5]} />
    </>
  );
}

export default App;
