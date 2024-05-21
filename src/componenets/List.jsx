import styles from "./list.module.css";
import TodoItem from "./TodoItm";
export default function List({ todos }) {
  return todos.map((item) => <TodoItem item={item} />);
}
