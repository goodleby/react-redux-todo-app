import { FunctionComponent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './ToDo.module.scss';
import { removeTodo, updateTodo } from './todoSlice';
import { ToDoType } from './todoSlice';

export type ToDoProps = {
  todo: ToDoType;
};

export const ToDo: FunctionComponent<ToDoProps> = ({ todo }) => {
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
      dispatch(updateTodo(updatedTodo));
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        {!isEdit ? (
          <div className={style.main}>
            <h2 className={style.title} onClick={startEdit}>
              {title}
            </h2>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              stopEdit();
            }}
            className={style.edit}
          >
            <input
              ref={editInput}
              type="text"
              className={style.input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={() => {
                if (isEdit) stopEdit();
              }}
            />
          </form>
        )}
      </div>
      <div className={style.buttons}>
        <button
          className={style.button}
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          ❌
        </button>
        <button
          className={style.button}
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
};

export default ToDo;
