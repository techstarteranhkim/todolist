import "./App.css";
import TodoList from "./layout/ToDoList";
import Background from "./layout/background";
import Navbar from "./layout/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <body>
        <Background></Background>
        <TodoList></TodoList>
      </body>
    </div>
  );
}

export default App;
