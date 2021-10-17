import React, { useRef, useEffect } from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {

  const inputRef = useRef(null);
  useEffect(() => inputRef.current.focus(), [])
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();

    if (inputText.length < 1) {
      setInputText("");
    } else {
      setTodos([
        ...todos,
        {
          text: inputText,
          id: Math.floor(Math.random() * 10000),
          completed: false,
        },
      ]);

      setInputText("");
    }
  };

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        placeholder="Enter a todo..."
        value={inputText}
        onChange={inputTextHandler}
        ref={inputRef}
      />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
