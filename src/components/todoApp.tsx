import { useState } from "react";
import "../styles/todoApp.css";
import Todo from "./todo";

export interface TodoInterface {
  id: string, 
  title: string,
  completed: boolean
}

export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setTitle(value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false
    }

    const temp = [... todos];
    temp.unshift(newTodo);

    setTodos(temp);
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="todoInput"
          value={title}
        ></input>
        <button type="submit" className="buttonCreate">
          Create todo
        </button>
        {title}
      </form>

      <div className="todosContainer">
        {
          todos.map(item => (
            <Todo key="{item.id}" item={item} />
          ))
        }
      </div>
    </div>
  );
}
