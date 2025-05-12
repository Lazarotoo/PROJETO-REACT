// Componente TodoForm: formulário para criar novas tarefas
const TodoForm = ({ addTodo }) => {
  // Definindo estados para armazenar o título da tarefa e a categoria
  // eslint-disable-next-line no-undef
  const [value, setValue] = useState("");  // Estado para o título da tarefa
  // eslint-disable-next-line no-undef
  const [category, setCategory] = useState("");  // Estado para a categoria da tarefa

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();  // Previne o comportamento padrão do formulário (recarregar a página)
    
    // Verifica se o valor do título ou categoria não foi preenchido, se sim, não faz nada
    if (!value || !category) return;

    // Adiciona a nova tarefa chamando a função addTodo com o título e a categoria
    addTodo(value, category);

    // Limpa os campos após o envio do formulário
    setValue("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      {/* Título da seção de criação de tarefas */}
      <h2>Criar Tarefa:</h2>
      
      {/* Formulário para criar novas tarefas */}
      <form onSubmit={handleSubmit}>
        {/* Campo de entrada para o título da tarefa */}
        <input
          type="text"
          placeholder="Digite o título"
          value={value}  // O valor do campo é controlado pelo estado 'value'
          onChange={(e) => setValue(e.target.value)}  // Atualiza o estado 'value' quando o usuário digita
        />
        
        {/* Dropdown para selecionar a categoria da tarefa */}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {/* Opções para escolher a categoria */}
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        
        {/* Botão para enviar o formulário */}
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

// Exporta o componente TodoForm para ser usado em outras partes do código
export default TodoForm;
