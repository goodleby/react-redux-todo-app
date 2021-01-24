import style from './ToDoList.module.scss';
import ToDo from './ToDo';
import { ToDoType } from './todoSlice';

export type ToDoListProps = {
  todos: ToDoType[];
};

export default function ToDoList({ todos }: ToDoListProps) {
  return (
    <div className={style.wrapper}>
      {todos.map((todo) => (
        <div className={style.item} key={todo.id}>
          <ToDo todo={todo} />
        </div>
      ))}
    </div>
  );
}
