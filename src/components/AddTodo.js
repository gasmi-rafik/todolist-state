import React from "react";

const AddTodo = () => {
  return (
    <div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="enter your new todo"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <button class="btn btn-outline-primary" type="button">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
