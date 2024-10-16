import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([
    "Make the bed",
    "Wash my hands",
    "Eat",
    "Walk the dog",
  ]);

  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <>
      <h1>Todos</h1>
      <div className="container mt-5">
        <div className="card">
          <div className="card-header">
            <div className="input-group mb-3">
              <input
                type="text"
                value={newTodo}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown} // Detecta la tecla Enter
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
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {todo}
                  <button
                    type="button"
                    className="btn-close btn-li btn-sm"
                    onClick={() => handleDeleteTodo(index)}
                  ></button>
                </li>
              ))
            ) : (
              <li className="list-group-item text-center"></li>
            )}
          </ul>

          <div className="card-footer text-muted">
            {todos.length} item{todos.length !== 1 && "s"} left
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
