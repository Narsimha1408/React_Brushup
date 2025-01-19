import "./todo.css";
import { useState } from "react";

export function Todo() {
  const [todos, setTodos] = useState([
    { title: "item 1", isCompleted: true},
    { title: "item 2", isCompleted: true},
    { title: "item 3", isCompleted: false},
    { title: "item 4", isCompleted: false},
    { title: "item 5", isCompleted: false},
  ]);
  const [newTodo, setNewTodo] = useState(""); //useState takes the initial value in ()
  //newTodo is a state variable and setNewTodo is method by which we can mutate the state variable
  const [newTodoStatus,setNewTodoStatus]=useState(false)

  const handleTodoChange = (e) => {
    setNewTodo(e.target.value);
    //we are accesing and setting the newTodo with the help of its method
  };

  const onTodoSubmission = (e) => {
    e.preventDefault();
    setTodos([...todos, { title: newTodo, isCompleted: newTodoStatus }]); //destructuring the setTodos //here we are updating the todos(state variable) with the help of setTodos(method)
    setNewTodo(""); //updating the input box to empty after submission
    setNewTodoStatus("");
  };

  const handleCompletion=(e)=>{
    const checkedIndex=Number(e.target.dataset.id)
    const checkedStatus=e.target.checked
  //replacing the item in a todo list by changing the iscompleted status 
    const todosCopy=[...todos]
    
    const newUpdatedTodo={...todosCopy[checkedIndex]} //getting the todo at checkedIndex
    newUpdatedTodo.isCompleted=checkedStatus
    todosCopy.splice(checkedIndex,1,newUpdatedTodo)

    setTodos(todosCopy)
  }

  const handleNewTodoStatus=(e)=>{
    setNewTodoStatus(e.target.value)
    console.log(e.target.value)
  }
  return (
    <div className="todo-app">
      <div className="todo-wrapper">
        <h1>TODO APP</h1>
        <div className="todo-Form">
          <form>
            <input
              placeholder="enter the new task"
              type="text"
              value={newTodo}
              onChange={handleTodoChange}
            />
            <select onChange={handleNewTodoStatus} value={newTodoStatus}>
                <option value={false}>todo</option>
                <option value={true}>completed</option>
            </select>
            <button onClick={onTodoSubmission}>ADD</button>
          </form>
        </div>

        <div className="todo-list">
          {todos.map((todo,idx) => (
            <div className="todo-item">
              <input type="checkbox" data-id={idx} checked={todo.isCompleted} onChange={handleCompletion}/>
              <span className={todo.isCompleted ? "completedTask" : ""}>{todo.title}</span>
            </div>
          ))}

          {/* <div className="todo-item">list 1</div>
                    <div className="todo-item">list 2</div>
                    <div className="todo-item">list 3</div>
                    <div className="todo-item">list 4</div> */}
        </div>
      </div>
    </div>
  );
}
