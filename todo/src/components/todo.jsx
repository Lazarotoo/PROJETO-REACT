// Componente Todo: exibe uma tarefa individual
const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      // Aplica um estilo de "linha tachada" no texto se a tarefa estiver completada
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        {/* Exibe o texto da tarefa */}
        <p>{todo.text}</p>
        
        {/* Exibe a categoria da tarefa entre parênteses */}
        <p className="category">({todo.category})</p>
      </div>
      <div>
        {/* Botão para marcar a tarefa como completada */}
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        
        {/* Botão para remover a tarefa */}
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
};

// Exporta o componente Todo para ser usado em outras partes do código
export default Todo;
