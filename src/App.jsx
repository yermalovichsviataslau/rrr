import "./App.css";
import LifecycleComponent from "./components/LifecycleComponentClass";
import LifecycleComponentUseEffect from "./components/LifecycleComponentUseEffect";

function App() {
  return (
    <div>
      <LifecycleComponent />
      <br />
      <br />
      <LifecycleComponentUseEffect />
    </div>
  );
}

export default App;
