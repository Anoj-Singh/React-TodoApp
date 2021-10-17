import React, { useState } from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(text);

  const deleteHandler = () => {
    const filterTodos = todos.filter((element) => element.id !== todo.id);
    setTodos(filterTodos);
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const updateHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, text: editText };
        } else {
          return item;
        }
      })
    );
    setIsEdit(false);
  };

  return (
    <div className="todo">

      {isEdit ? (
        <input value={editText} onChange={(e) => setEditText(e.target.value)} className="updateInput"/>
      ) : (
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {text}
        </li>
      )}

      {isEdit ? (
        <button className="updateBtn" onClick={updateHandler}>
          Update
        </button>
      ) : (
        <div className="btns">
          <button onClick={completeHandler} className="complete-btn">
            <i className="fas fa-check"></i>
          </button>
          <button onClick={deleteHandler} className="trash-btn">
            <i className="fas fa-trash"></i>
          </button>
          <button className="edit-btn" onClick={() => setIsEdit(true)}>
            <i className="fas fa-edit"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;
