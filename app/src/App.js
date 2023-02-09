import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import List from "./Components/List";
import Section from "./Components/Section";
import todos from "./api/index";

const AppTitle = "To-Do-App";

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
        <h1>{AppTitle}</h1>
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
