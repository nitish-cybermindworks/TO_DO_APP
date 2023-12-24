import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import "./App.css";

function App() {
  const todoItems = [
    { name: "Buy Milk", dueDate: "24/12/2023" },
    { name: "Marina Beach Visit", dueDate: "24/12/2023" },
    { name: "Raw Maize", dueDate: "24/12/2023" },
  ];
  return (
    <center className="todo-conatiner">
      <AppName />
      <AddTodo />
      <TodoItems  todoItems={todoItems} />
    </center>
  );
}

export default App;
