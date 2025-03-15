import { useEffect, useState } from "react";
import EditTodo from "./EditTodo";


const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const getTodos = async () => { 
        try {
            const response = await fetch("http://localhost:5500/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(() => {
        getTodos();
    }
        , []);
    
    //delete todo
    const deleteTodo = async (id) => {
        try {
            await fetch(`http://localhost:5500/todos/${id}`, {
                method: "DELETE",
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (error) {
            console.error(error.message);
        }
    }





     return (
         <div className="flex flex-col justify-center items-center">
             <h1>Todo List</h1>
             <table className="w-[70%] border border-gray-300 shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b text-left">Description</th>
             <th className="px-4 py-2 border-b text-left">Edit</th> 
            <th className="px-4 py-2 border-b text-left">Delete</th>
          </tr>
        </thead>
                 {todos.map((todo) => 
                     <tbody key={todo.todo_id}> 
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 border-b">{todo.description}</td>
                             <td className="px-4 py-2 border-b">
                                 <EditTodo todo={todo} />
                             </td>
                             <td className="px-4 py-2 border-b">
                                 <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => deleteTodo(todo.todo_id)}>
                                        Delete
                                 </button>
                             </td>
          </tr>
        </tbody> ) }
      </table>
     </div>
 )

}


export default TodoList;