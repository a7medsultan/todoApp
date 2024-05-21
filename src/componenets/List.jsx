import styles from "./list.module.css";
import TodoItem from "./TodoItm";
export default function List({ todos, setTodos }) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItem item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
