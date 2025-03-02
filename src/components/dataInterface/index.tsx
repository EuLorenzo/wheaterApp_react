import WeatherData from "../../WeatherData";

interface DataInterface {
  data: WeatherData;
}

const DataInterface = ({ data }: DataInterface) => {
  return <div>{data.weather[0].description}</div>;
};

export default DataInterface;
