import React, { useState } from "react";
import Form from "./Components/Form";
import List from "./Components/List";
import Section from "./Components/Section";

const AppTitle = "To-Do-App";
const list = [
  {title:"test #1", completed: false },
  {title:"test #2"},
  {title:"test #3"}
];

export const App = () => {
  const [todoList, setTodoList] = useState(list);
  const addTodo = (item) => {
    setTodoList((oldlist) => [...oldlist, item]);
    };
   const removeTodo = (id) => {
  setTodoList(oldList => {
    return oldList.filter(item => item.title !== id);
  });
};
  

  return (
    <div className="ui container center aligned">
      <Section>
        <h1>{AppTitle}</h1>
      </Section>
      <Section>
        <Form addTodo={addTodo}/>
      </Section>
      <Section>
        <List removeTodoListProp={removeTodo} list={todoList} />
      </Section>
      
    </div>
  );
};

export default App