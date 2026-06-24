import { useEffect, useState } from "react";

function LifecycleComponentUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("componentDidMount");
    const fetchTodos = async () => {
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

        const loginData = await responseLogin.json();
        const accessToken = loginData.access_token;

        //get Todos
        const responseTodos = await fetch(
          "https://todo-redev.onrender.com/api/todos",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          },
        );
        const dataTodos = await responseTodos.json();
        console.log("data: ", dataTodos);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTodos();
  }, []);

  useEffect(() => {
    if (count > 0) {
      console.log("componentDidUpdate", `Count: ${count}`);
            
      if (count % 2 === 0) {
        console.log('Functional: Четное число, компонент обновлен!');
      }
    }

    
  }, [count]);

  useEffect(() => {
    console.log("componentDidMount и componentDidUpdate");
  });

  useEffect(() => {
    return () => console.log("componentWillUnmount");
  }, []);

  return (
    <div className="">
      <p>Count:{count}</p>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Click +1
      </button>
    </div>
  );
}

export default LifecycleComponentUseEffect;
