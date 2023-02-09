import React from "react";
import Todo from "./Todo";

const List = ({ list, removeTodoListProp, editTodoListProp }) => {
  const renderedList = list.map((item) => (
    <Todo
      title={item.title}
      completed={item.completed}
      removeTodoListProp={(e) => removeTodoListProp(item.title)}
      editTodoItemProp={(updatedItem) =>
        editTodoListProp(item._id, updatedItem)
      }
      key={item.title}
    />
  ));
  return <div className="ui grid center aligned">{renderedList}</div>;
};
export default List;
