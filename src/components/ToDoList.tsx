import styles from './ToDoList.module.scss';
import ToDo from './ToDo';
import { ToDoType } from '../types/todo';

export type ToDoListProps = {
  todos: ToDoType[];
};

export default function ToDoList({ todos }: ToDoListProps) {
  return (
    <div className={styles.wrapper}>
      {todos.map((todo) => (
        <div className={styles.item} key={todo.id}>
          <ToDo todo={todo} />
        </div>
      ))}
    </div>
  );
}
