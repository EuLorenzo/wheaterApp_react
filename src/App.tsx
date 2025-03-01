import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { GlobalStyle } from "./GlobalStyle";
import useFetch from "./hooks/useFetch";
import DataInterface from "./components/dataInterface";

function App() {
  const [city, setCity] = useState("");
  const { data, getData, loading, error } = useFetch(city);

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
      {error && <p>{error}</p>}
      {data && <DataInterface teste={data} />}
    </>
  );
}

export default App;
