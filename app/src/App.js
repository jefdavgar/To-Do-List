import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import List from "./Components/List";
import Section from "./Components/Section";
import todos from "./api/index";
import Avatar from './assets/Avatar.png'


const AppTitle = "To Do a List";
const AppMessage = "Hello Lina!";
const AppMessagge2 = "What are we going to do today?"

export const App = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await todos.get("/todos");
      setTodoList(data);
    }

    fetchData();
  }, []);

  const addTodo = async(item) => {
    const {data} = await todos.post("/todos", item);
    setTodoList((oldlist) => [...oldlist, data]);
  };
  const removeTodo = async (id) => {
    await todos.delete(`/todos/${id}`);
    setTodoList((oldList) => {
      return oldList.filter((item) => item.title !== id);
    });
  };
  const editTodo = async (id, item) => {
    await todos.put(`/todos/${id}`, item);
}

  return (
    <div className="ui container center aligned">
      <Section>
        <h1 id="Title">{AppTitle}</h1>
        <img id='Avatar'src={Avatar}/>
        <p id="Text">{AppMessage}</p>
        <p id="Text2">{AppMessagge2}</p>
      </Section>
      <Section>
        <Form addTodo={addTodo} />
      </Section>
      <Section>
        <List editTodoListProp={editTodo} removeTodoListProp={removeTodo} list={todoList} />
      </Section>
    </div>
  );
};

export default App;
