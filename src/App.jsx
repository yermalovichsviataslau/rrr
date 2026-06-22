import "./App.css";
import ChangeColor from "./components/ChangeColor";
import Counter from "./components/Counter";
import InputText from "./components/InputText";
import ShowText from "./components/ShowText";

const App = () => {
  return (
    <>
      <h2>Task 1</h2>
      <p>
        1. Создай компонент с кнопкой, которая увеличивает значение state на 1
        при каждом нажатии.
      </p>
      <Counter />
      <br />
      <p>
        2. Создай компонент, который скрывает или показывает текст при помощи
        кнопки.
      </p>
      <ShowText />
      <br />
      <p>
        3. Создай компонент с полем ввода, которое обновляет значение state при
        каждом вводе. Выведи значение state под полем ввода.
      </p>
      <InputText />
      <br />
      <p>4. Создай компонент с кнопкой, которая меняет цвет текста при каждом нажатии.</p>
      <ChangeColor />
    </>
  );
};

export default App;
