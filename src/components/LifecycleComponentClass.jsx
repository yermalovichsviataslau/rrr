import { Component } from "react";

export default class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  async componentDidMount() {
    console.log("componentDidMount: Компонент смонтирован");
    try {
      //login
      const responseLogin = await fetch(
        "https://todo-redev.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "student@test.com",
            password: "123456",
          }),
        },
      );

      if (!responseLogin.ok) {
        const errorData = await responseLogin.json();
        console.error("Ошибка:", errorData);

        throw new Error(`HTTP error! status: ${responseLogin.status}`);
      }

      const loginData = await responseLogin.json();
      const accessToken = loginData.access_token;

      //get todos
      const response = await fetch(
        "https://todo-redev.onrender.com/api/todos",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        },
      );

      const data = await response.json();
      console.log("data: ", data);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate: Проверка необходимости обновления')

    const shouldUpdate = nextState.count % 2 === 0
    return shouldUpdate
  }
  
  componentDidUpdate() {
    console.log("componentDidUpdate: Компонент обновлен", this.state.count);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Компонент удален')
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h3>Count: {count}</h3>
        <button onClick={this.handleIncrement}>Click +1</button>
      </div>
    );
  }
}
