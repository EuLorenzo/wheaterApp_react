import WeatherData from "../../WeatherData";
import { Container, ExtraInfos, MainInfos } from "./styles";

interface DataInterface {
  data: WeatherData;
}

const DataInterface = ({ data }: DataInterface) => {
  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const cityName = data.name;
  const stateName = data.state;

  const temp = data.main.temp;
  const feelsLike = data.main.feels_like;

  const description = data.weather[0].description;

  const wind_vel = data.wind.speed;

  const humidity = data.main.humidity;

  return (
    <Container>
      <h1>
        {cityName} - {stateName}
      </h1>

      <MainInfos>
        <div>
          <p>{temp}°C</p>
          <img src={iconUrl} alt="Ícone do clima" />
        </div>
        <span>{description}</span>
      </MainInfos>

      <ExtraInfos>
        <div>
          <h2>Umidade</h2>
          <p>{humidity}%</p>
        </div>

        <div>
          <h2>Velocidade do vento</h2>
          <p>{wind_vel} m/s</p>
        </div>

        <div>
          <h2>Sensação térmica</h2>
          <p>{feelsLike}°C</p>
        </div>
      </ExtraInfos>
    </Container>
  );
};

export default DataInterface;
