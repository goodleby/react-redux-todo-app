import style from './ToDoList.module.scss';
import ToDo from './ToDo';
import { ToDoType } from './todoSlice';
import { FunctionComponent } from 'react';

export type ToDoListProps = {
  todos: ToDoType[];
};

export const ToDoList: FunctionComponent<ToDoListProps> = ({ todos }) => {
  return (
    <div className={style.wrapper}>
      {todos.map((todo) => (
        <div className={style.item} key={todo.id}>
          <ToDo todo={todo} />
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
