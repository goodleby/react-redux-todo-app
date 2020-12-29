import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ToDo.module.scss';
import { remove, update } from '../features/todoSlice';
import { ToDoType } from '../types/todo';

export type ToDoProps = {
  todo: ToDoType;
};

export default function ToDo({ todo }: ToDoProps) {
  const [title, setTitle] = useState(todo.title);
  const [isEdit, setEdit] = useState(false);
  const editInput = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  const startEdit = () => {
    setEdit(true);
    setTimeout(() => editInput.current?.focus());
  };
  const stopEdit = () => {
    setEdit(false);
    const updatedTodo = { ...todo, title };
    if (JSON.stringify(todo) !== JSON.stringify(updatedTodo)) {
      dispatch(update({ todoId: todo.id, updatedTodo }));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {!isEdit ? (
          <div className={styles.main}>
            <h2 className={styles.title} onClick={startEdit}>
              {title}
            </h2>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              stopEdit();
            }}
            className={styles.edit}
          >
            <input
              ref={editInput}
              type="text"
              className={styles.input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={() => {
                if (isEdit) stopEdit();
              }}
            />
          </form>
        )}
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => dispatch(remove(todo.id))}
        >
          ❌
        </button>
        <button
          className={styles.button}
          onMouseDown={() => {
            if (isEdit) stopEdit();
            else startEdit();
          }}
        >
          🔧
        </button>
      </div>
    </div>
  );
}
