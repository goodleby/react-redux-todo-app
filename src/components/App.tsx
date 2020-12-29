import { useSelector } from 'react-redux';
import styles from './App.module.scss';
import Controls from './Controls';
import ToDoList from './ToDoList';
import { selectTodos } from '../features/todoSlice';

export default function App() {
  const appTitle = 'To Do:';
  const todos = useSelector(selectTodos);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>{appTitle}</h1>
        <Controls />
        <ToDoList todos={todos} />
      </div>
    </div>
  );
}
