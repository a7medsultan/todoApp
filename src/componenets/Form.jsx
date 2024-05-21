import styles from "./form.module.css";
import { useState } from "react";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            placeholder="enter a todo item ...."
          />
          <button className={styles.btn} type="submit">
            add
          </button>
        </div>
      </form>
    </div>
  );
}
