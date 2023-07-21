import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const teste = useContext(GlobalContext);
  if (teste.produto === null) return null;
  return (
    <div>
      Produto:{" "}
      {teste.produto.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
      <button onClick={teste.limparProduto}>Limpar</button>
    </div>
  );
};

export default Produto;
