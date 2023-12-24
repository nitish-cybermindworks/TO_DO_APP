import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <div className={style.itemContainer}>
      {todoItems.map((item) => {
        return <TodoItem key={item.name} item={item} />;
      })}
    </div>
  );
};

export default TodoItems;
