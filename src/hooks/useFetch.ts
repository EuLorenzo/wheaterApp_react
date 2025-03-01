import { useState } from "react";

const useFetch = (cityName: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

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
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const getWheaterInfos = async (lat: number, lon: number) => {
    setLoading(true);
    try {
      const res = await fetch(wheaterUrl(lat, lon));
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return { loading, getData, data };
};

export default useFetch;
