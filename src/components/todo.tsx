import { useState } from "react";
import type { DeleteFuncion, TodoInterface, UpdateFunction } from "./todoApp"

interface TodoProps {
    item: TodoInterface;
    onUpdate: UpdateFunction;
    onDelete: DeleteFuncion;
}

export default function Todo({item, onUpdate, onDelete}: TodoProps) {

    const [isEdit, setIsEdit] = useState(false);

    function FormEdit(){

        const [newValue, setNewValue] = useState(item.title);

        function handleSubmit(event: React.FormEvent<HTMLFormElement>){
            event.preventDefault();

        }
        function handleChange(event: React.ChangeEvent<HTMLInputElement>){
            const value = event.target.value;
            setNewValue(value);
        }
        function handleClick(){
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }

        return <form className="todoUpdateForm" onSubmit={handleSubmit}>
            <input type="text" className="todoInput" onChange={handleChange}  value={newValue} />
            <button className="button" onClick={handleClick}>Update</button>
        </form>
    }

    function TodoElement(){
        return  (
        <div className="todoInfo">
            <p className="todoTitle">{item.title}</p>
        <div className="todoButtons">
            <button className="todoBtn" onClick={() => setIsEdit(true)}>Editar</button>
            <button className="todoBtn" onClick={() => onDelete(item.id)}>Eliminar</button>
            </div>
        </div>
        )
    }

    return (
        <div className="todo">
            {isEdit ?  <FormEdit /> : <TodoElement />  }
        </div>
    )
}