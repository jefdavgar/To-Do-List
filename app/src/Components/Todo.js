import React, { useState } from "react";

const Todo = ({ title, completed, removeTodoListProp, editTodoItemProp  }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);
  const [tempValue, setTempValue] = useState(title);
  const [completedState, setCompletedState] = useState(completed);

  const handleDivDoubleClick = () => {
    setIsEditing(true);
  };

  const handleInputKeyDown = (e) => {
    const key = e.keyCode;
    if (key === 13) {
      editTodoItemProp({ title: tempValue });
      setValue(tempValue);
      setIsEditing(false);
    } else if (key === 27) {
      setTempValue(value);
      setIsEditing(false);
    }
  };

  const handleInputOnChange = (e) => {
    setTempValue(e.target.value);
  };

  const handleButtonClick = () => {
    setCompletedState((oldCompleted) => {
        const newState = !oldCompleted;
        editTodoItemProp({ completed: newState });
        return newState;
    });
};

  return (
    <div className="row">
      {isEditing ? (
        <div className="columns seven wide">
          <div className="ui input fluid">
            <input
              onChange={handleInputOnChange}
              onKeyDown={handleInputKeyDown}
              autoFocus
              value={tempValue}
            />
          </div>
        </div>
      ) : (
        <>
          <div
            className="column five wide"
            onDoubleClick={handleDivDoubleClick}
          >
            <h2 className={`ui header ${completedState ? "yellow" : ""}`}>
              {value}
            </h2>
          </div>
          <div className="column one wide">
            <button
              className={`ui button circular icon ${
                completedState ? "yellow" : "gray"
              }`}
              onClick={handleButtonClick}
            >
              <i className="white check icon" />
            </button>
          </div>
          <div className="column two wide">
            <button onClick={removeTodoListProp} className="ui button circular icon red">
              <i className="white trash icon"></i>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;