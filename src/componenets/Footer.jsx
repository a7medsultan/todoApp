import styles from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span>
        {completedTodos} of {totalTodos} is completed
      </span>
    </div>
  );
}
