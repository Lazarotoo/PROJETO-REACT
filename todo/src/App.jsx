import { useState } from "react";
import Todo from "./components/todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/search";
import Filter from "./components/filter";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar Funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  const filteredAndSearchedTodos = todos
    .filter((todo) => {
      if (filter === "All") return true;
      if (filter === "Completed") return todo.isCompleted;
      if (filter === "Incomplete") return !todo.isCompleted;
      return true;
    })
    .filter((todo) =>
      todo.text.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sort === "Asc"
        ? a.text.localeCompare(b.text)
        : b.text.localeCompare(a.text)
    );

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
      <div className="todo-list">
        {filteredAndSearchedTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
