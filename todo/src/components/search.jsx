// Componente Search: permite ao usuário realizar a busca por tarefas
const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      {/* Título da seção de pesquisa */}
      <h2>Pesquisar:</h2>
      
      {/* Campo de entrada de texto para buscar tarefas */}
      <input
        type="text" // Define que o campo de entrada é de tipo texto
        value={search} // O valor do campo de texto é controlado pelo estado 'search'
        // Quando o valor no campo de texto muda, a função setSearch é chamada para atualizar o estado 'search'
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite para pesquisar" // Texto que aparece dentro do campo antes de ser preenchido
      />
    </div>
  );
};

// Exporta o componente Search para ser usado em outras partes do código
export default Search;
