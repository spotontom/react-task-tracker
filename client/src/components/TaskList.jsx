import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

export default function TaskList({ tasks, onDelete, onToggle }) {
  return (
    <ul className={styles.list}>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onDelete={() => onDelete(index)}
          onToggle={() => onToggle(index)}
        />
      ))}
    </ul>
  );
}
