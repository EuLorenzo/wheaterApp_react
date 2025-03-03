import WeatherData from "../../WeatherData";
import { Container, NameBox, Temp, WeatherInfos, Description } from "./styles";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";

interface DataInterface {
  data: WeatherData;
}

const DataInterface = ({ data }: DataInterface) => {
  const cityName = data.name;
  const stateName = data.state;

  const temp_min = data.main.temp_min;
  const temp = data.main.temp;
  const temp_max = data.main.temp_max;

  const description = data.weather[0].description;
  const humidity = data.main.humidity;
  const humidityLevel = () => {
    if (humidity <= 30) {
      return "Baixa umidade";
    } else if (humidity <= 60) {
      return "Média umidade";
    } else {
      return "Alta umidade";
    }
  };

  return (
    <Container>
      <NameBox>
        <h1>
          {cityName} - {stateName}
        </h1>
      </NameBox>

      <WeatherInfos>
        <Temp>
          <div>
            <IoIosArrowRoundDown color="#1a4763" /> <p>{temp_min}°</p>
          </div>
          <div></div>
          <div>
            <IoIosArrowRoundUp color="#E2251A" /> <p>{temp_max}°</p>
          </div>
        </Temp>

        <Description>
          <h2>{description}</h2>
          <p>Umidade: {humidity}%</p>
          <p>{humidityLevel()}</p>
        </Description>
      </WeatherInfos>
    </Container>
  );
};

export default DataInterface;
