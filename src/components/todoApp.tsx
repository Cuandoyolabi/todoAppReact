import { useState } from "react";

export default function TodoApp() {
  const [title, setTitle] = useState("Hola");

    function handleClick(event: React.MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        setTitle("Marcos");
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        const value = event.target.value;

        setTitle(value);
    }   

  return (
    <div className="todoContainer">
      <form className="todoCreateForm">
        <input 
        onChange={handleChange}
        className="todoInput" value="title"></input>
        <input
          onClick={handleClick}
          type="submit"
          value="Create todo"
          className="buttonCreate"
        />

        {title}
      </form>
    </div>
  );
}
