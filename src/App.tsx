import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { GlobalStyle } from "./GlobalStyle";
import useFetch from "./hooks/useFetch";

function App() {
  const [city, setCity] = useState("");
  const { loading, getData, data } = useFetch(city);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getData();
  };

  const onCityChange = (e: string) => {
    setCity(e);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} onCityChange={onCityChange} city={city} />
      <GlobalStyle />
      {loading && <p>Carregando ........</p>}
      {data && <p>Dados resgatados com sucesso!</p>}
    </>
  );
}

export default App;
