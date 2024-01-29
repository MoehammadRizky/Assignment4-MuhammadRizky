import react from "react"; 
import { TodoList } from "./TodoList";
import  CreateTodo  from "./CreateTodo";
export const AppTodo = () => {
    return (
        <div>
            <CreateTodo />
            <TodoList />
        </div>
    )
}