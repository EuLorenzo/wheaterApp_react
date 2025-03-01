import WeatherData from "../../WeatherData";

interface DataInterface {
  teste: WeatherData;
}

const DataInterface = ({ teste }: DataInterface) => {
  return <div>{teste.weather[0].description}</div>;
};

export default DataInterface;
