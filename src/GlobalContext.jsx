import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, []);

  function limparProduto() {
    setProduto(null);
  }

  return (
    <GlobalContext.Provider value={{ produto, setProduto, limparProduto }}>
      {children}
    </GlobalContext.Provider>
  );
};
