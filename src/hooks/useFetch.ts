import { useState } from "react";
import WeatherData from "../WeatherData";

const useFetch = (cityName: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<WeatherData | null>(null);

  //Por ser uma aplicação em Vite, muda a forma de puxar do .env
  const apiKey = import.meta.env.VITE_API_KEY;

  const geoCodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;

  const wheaterUrl = (lat: number, lon: number) =>
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=pt&units=metric`;

  const getData = () => {
    setData(null);
    getGeoInfos();
  };

  const getGeoInfos = async () => {
    setLoading(true);
    try {
      const res = await fetch(geoCodeUrl);
      const json = await res.json();
      const city = json[0];

      if (!city.state) {
        setError("Digite uma cidade !!");
        setLoading(false);
        return;
      }

      getWheaterInfos(city.lat, city.lon, city.state);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Ocorreu um erro !");
    }
    setLoading(false);
  };

  const getWheaterInfos = async (lat: number, lon: number, state: string) => {
    setLoading(true);
    try {
      const res = await fetch(wheaterUrl(lat, lon));
      const json = await res.json();
      json.state = state;
      setData(json);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Ocorreu um erro !");
    }
    setLoading(false);
  };

  return { loading, getData, data, error };
};

export default useFetch;
