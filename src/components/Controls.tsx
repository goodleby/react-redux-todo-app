import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Controls.module.scss';
import { add } from '../features/todoSlice';

export default function Controls() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  return (
    <form
      className={styles.wrapper}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(add({ title }));
        setTitle('');
      }}
    >
      <input
        type="text"
        className={styles.input}
        placeholder="What to do?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.buttons}>
        <button className={styles.button}>Add</button>
      </div>
    </form>
  );
}
