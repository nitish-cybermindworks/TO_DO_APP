import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return todoItems.map((item) => {
    return <TodoItem key={item.name} item={item} />;
  });
};

export default TodoItems;
