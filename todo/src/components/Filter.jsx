// Componente Filter: permite filtrar as tarefas por status (completa ou incompleta) e ordenar as tarefas por ordem alfabética
const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      {/* Título para a seção de filtro */}
      <h2>Filtrar:</h2>
      
      <div className="filter-options">
        {/* Filtro por status das tarefas */}
        <div>
          <p>Status:</p>
          {/* Dropdown para escolher o status das tarefas */}
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            {/* Opções para o filtro de status */}
            <option value="All">Todas</option>  {/* Exibe todas as tarefas */}
            <option value="Completed">Completas</option>  {/* Exibe apenas as tarefas completadas */}
            <option value="Incomplete">Incompletas</option>  {/* Exibe apenas as tarefas incompletas */}
          </select>
        </div>

        {/* Filtro por ordem alfabética */}
        <div>
          <p>Ordem Alfabética:</p>
          {/* Botão para ordenar as tarefas em ordem crescente (Ascendente) */}
          <button onClick={() => setSort("Asc")}>Asc</button>
          {/* Botão para ordenar as tarefas em ordem decrescente (Descendente) */}
          <button onClick={() => setSort("Desc")}>Desc</button>
        </div>
      </div>
    </div>
  );
};

// Exporta o componente para ser usado em outras partes do código
export default Filter;
