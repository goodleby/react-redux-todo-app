import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import style from './App.module.scss';
import Controls from './Controls';
import ToDoList from '../features/todo/ToDoList';
import { selectTodos } from '../features/todo/todoSlice';

export const App: FunctionComponent = () => {
  const appTitle = 'To Do:';
  const todos = useSelector(selectTodos);

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h1 className={style.title}>{appTitle}</h1>
        <Controls />
        <ToDoList todos={todos} />
      </div>
    </div>
  );
};

export default App;
