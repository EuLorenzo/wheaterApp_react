import { useState } from "react";
import WeatherData from "../WeatherData";

const useFetch = (cityName: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<"Ocorreu um erro !" | null>(null);
  const [data, setData] = useState<WeatherData | null>(null);

  const apiId = "6df013556c712cbeb2a160ee4e0699ac";

  const geoCodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiId}`;

  const wheaterUrl = (lat: number, lon: number) =>
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiId}&lang=pt&units=metric`;

  const getData = () => {
    getGeoInfos();
  };

  const getGeoInfos = async () => {
    setLoading(true);
    try {
      const res = await fetch(geoCodeUrl);
      const json = await res.json();
      const city = json[0];
      getWheaterInfos(city.lat, city.lon);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Ocorreu um erro !");
    }
    setLoading(false);
  };

  const getWheaterInfos = async (lat: number, lon: number) => {
    setLoading(true);
    try {
      const res = await fetch(wheaterUrl(lat, lon));
      const json: WeatherData = await res.json();
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
