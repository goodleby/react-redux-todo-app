import { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './Controls.module.scss';
import { addTodo } from '../features/todo/todoSlice';

export const Controls: FunctionComponent = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  return (
    <form
      className={style.wrapper}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo({ title }));
        setTitle('');
      }}
    >
      <input
        type="text"
        className={style.input}
        placeholder="What to do?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={style.buttons}>
        <button className={style.button}>Add</button>
      </div>
    </form>
  );
};

export default Controls;
