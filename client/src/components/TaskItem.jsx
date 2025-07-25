import styles from "./TaskItem.module.css";

export default function TaskItem({ task, onDelete, onToggle }) {
  // uncomment for debugging
  // console.log("Rendering Task:", task);
  const { title, description, dueDate, completed } = task;

  return (
    <li className={`${styles.item} ${completed ? styles.itemCompleted : ""}`}>
      <div className={styles.details}>
        <strong>{title}</strong>
        {/* A Test of truthiness */}
        {description && <p>{description}</p>}
        {dueDate && <small>Due: {dueDate}</small>}
      </div>
      <div className={styles.actions}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={onToggle}
        />
        <button className={styles.deleteButton} onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}
