import { useState } from "react";
import "../styles/todoApp.css";
import Todo from "./todo";

export interface TodoInterface {
  id: string;
  title: string;
  completed: boolean;
}

export type UpdateFunction = (id: string, value: string) => void;
export type DeleteFuncion = (id: string) => void;

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
      completed: false,
    };

    const temp = [...todos];
    temp.unshift(newTodo);

    setTodos(temp);
    setTitle("");
  }

  function handleUpdate(id: string, value: string) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    if (item) {
      item.title = value;
      setTodos(temp);
    } else {
      console.error("No se encuentra");
    }
  }

  function handleDelete(id: string) {
    const temp = todos.filter((item) => item.id !== id);
    setTodos(temp);
    setTitle("");
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <div className="todoUnion">
          <input
            onChange={handleChange}
            className="todoInput"
            value={title}
            placeholder="Crea una tarea..."
          ></input>
          <button type="submit" className="buttonCreate">
            Crear tarea
          </button>
        </div>
      </form>

      <div className="todosContainer">
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
