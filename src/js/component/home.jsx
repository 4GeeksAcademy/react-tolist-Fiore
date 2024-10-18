import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([
    "Make the bed",
    "Wash my hands",
    "Eat",
    "Walk the dog",
  ]);

  const [newTodo, setNewTodo] = useState("");

  const inputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (newTodo !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_lista, i) => i !== index);
    setTodos(updatedTodos);
  };

  const keyDown = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  return (
    <>
      <h1>TodosList😶‍🌫️</h1>
      <div className="container mt-5">
        <div className="card col-5 mx-auto">
          <div className="card-header">
            <div className="input-group mb-3">
              <input
                type="text"
                value={newTodo}
                onChange={inputChange}
                onKeyDown={keyDown}
                placeholder="What needs to be done?"
                className="form-control"
              />
            </div>
          </div>

          <ul className="list-group list-group-flush">
            {todos.length > 0 ? (
              todos.map((todo, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center mylist-item"
                >
                  {todo}
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => deleteTodo(index)}
                  ></button>
                </li>
              ))
            ) : ( // if.... else
              <li className="list-group-item text-center text-danger">
                No hay tareas, añadir tareas 😒
              </li>
            )}
          </ul>

          <div className="card-footer bg-light text-muted">
            {todos.length} item{todos.length !== 1 && "item"} left
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
