"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const pupulateTodosFromLocalStorage = () => {
        console.log("Populating todos from local storage...");
        const todoList = document.getElementById("todo-list");
        const todos = JSON.parse(localStorage.getItem("todos") || "[]");
        const todoHtml = todos
            .map((todo) => {
            return `
      <div class="single-todo">
          <div class="todo-content">
              <h3>${todo.title}</h3>
              <p>${todo.description}</p>
          </div>

          <div class="todo-actions">
              <button class="delete" data-id="${todo.id}">
                  Delete
              </button>

              <button class="edit" data-id="${todo.id}">
                  Edit
              </button>

              <button
                  class="mark-done"
                  data-id="${todo.id}"
                  style="background-color: ${todo.completed ? "red" : "initial"}"
                  ${todo.completed ? "disabled" : ""}
              >
                  ${todo.completed ? "Completed" : "Mark Done"}
              </button>
          </div>
      </div>
    `;
        })
            .join("");
        todoList.innerHTML = todoHtml;
    };
    const MarkTodoAsCompleted = (id) => {
        const todos = JSON.parse(localStorage.getItem("todos") || "[]");
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = true;
            }
            return todo;
        });
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };
    pupulateTodosFromLocalStorage();
    const deleteTodoFromLocalStorage = (id) => {
        const todos = JSON.parse(localStorage.getItem("todos") || "[]");
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        window.location.reload();
    };
    const saveTodoToLocalStorage = (todo) => {
        const todos = JSON.parse(localStorage.getItem("todos") || "[]");
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
        if (todo.completed) {
            console.log("Todo marked as completed:", todo);
        }
        else {
            console.log("Todo added:", todo);
        }
        window.location.reload();
    };
    const todoList = document.getElementById("todo-list");
    todoList?.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains("delete")) {
            const id = target.getAttribute("data-id");
            console.log("Delete button clicked for todo with id:", id);
            if (id) {
                deleteTodoFromLocalStorage(parseInt(id));
            }
        }
        if (target.classList.contains("mark-done")) {
            const id = target.getAttribute("data-id");
            console.log("Mark Done button clicked for todo with id:", id);
            if (id) {
                MarkTodoAsCompleted(parseInt(id));
                window.location.reload();
            }
        }
    });
    const form = document.getElementById("todo-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const title = formData.get("title");
        const description = formData.get("description");
        if (!title || !description) {
            console.error("Title and description are required.");
            return;
        }
        const todoItem = {
            id: Date.now(),
            title: title,
            description: description,
            completed: false,
        };
        //   console.log("Todo Item:", todoItem);
        saveTodoToLocalStorage(todoItem);
    });
});
