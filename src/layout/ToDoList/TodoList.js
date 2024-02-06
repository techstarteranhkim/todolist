import { useState } from "react";
import styles from "./TodoList.module.css";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Einkaufen gehen", completed: false },
    { id: 2, text: "React lernen", completed: true },
    { id: 3, text: "Sport machen", completed: false },
  ]);

  function addTodo(text) {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  }

  function completeTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className={styles.card}>
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </span>
          <button onClick={() => completeTodo(todo.id)}>Erledigt</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
