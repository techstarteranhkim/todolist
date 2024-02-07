import "./App.css";
import TodoList from "./layout/ToDoList";
import Background from "./layout/background";
import Navbar from "./layout/navbar/Navbar";

import { useEffect, useState } from "react";
import DataBaseResponse from "./utils/DatabaseResponse";

function App() {
  const [data, setData] = useState(undefined);

  useEffect(function () {
    setTimeout(() => {
      const response = DataBaseResponse;
      setData(response);
    }, 3000); // 3 Sekunden Ladezeit
  }, []);

  useEffect(function () {}, []);
  if (!data) return <div> Loading...</div>;

  return (
    <div>
      <body>
        <Background></Background>
        <TodoList></TodoList>
      </body>
    </div>
  );
}

export default App;
