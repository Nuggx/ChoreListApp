import  React from 'react';
import { faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Todo = ({text, todo, todos, setTodos}) => {
    //events
    const deleteHandler = () => {
        setTodos(todos.filter((e1) => e1.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return{
                ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };
    return(
        <li className="todo-item">
            <input aria-checked="false" type="checkbox" onChange={completeHandler}/>
            <span className={`todo-text ${todo.completed ? "completed" : ""}`}>{text}</span>
            <button aria-label="Delete item" className="delete-button" onClick={deleteHandler}>
                <FontAwesomeIcon icon={faTimes}/>
            </button>
        </li>
        
    );
}

export default Todo;