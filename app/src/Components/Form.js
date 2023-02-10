import { React, useState } from "react"; 

/*Para poder agregar el estado del componente cada vez qeu se agregue un tarea en el iinput, de esa manera permite cambiar el estado*/

function Form({ addTodo }) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    addTodo({ title: inputValue, completed: false });
    setInputValue("");
  };
  return (
    <form  className="ui form" onSubmit={handleFormSubmit}>
      <div className="ui grid center aligned">
        <div className="row">
          <div className="column eleven wide">
            <input
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              placeholder="Write your task here"
              id='Input'
            />
          </div>

          <div className="column one wide">
            <button id='plus' type="submit" className="ui button circular icon yellow">
              <i className="white plus icon"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;