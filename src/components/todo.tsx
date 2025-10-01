import { useState } from "react";
import type { TodoInterface } from "./todoApp"

interface TodoProps {
    item: TodoInterface;
}

export default function Todo({item}: TodoProps) {

    const [isEdit, setIsEdit] = useState(false);

    function FormEdit(){
        return <form>
            <input type="text" />
            <button>Update</button>
        </form>
    }

    function TodoElement(){
        return  (
        <div className="todoInfo">{item.title} 
            <button onClick={() => setIsEdit(true)}>Edit</button>
            <button>Delete</button>
        </div>
        )
    }

    return (

        <div className="todo">
            {isEdit ?  <FormEdit /> : <TodoElement />  }
        </div>
    )
}