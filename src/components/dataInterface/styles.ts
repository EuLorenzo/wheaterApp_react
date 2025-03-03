import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1000px;
  margin: auto;

  h1 {
    text-align: center;
  }
`;

export const NameBox = styled.div`
  width: 100%;
`;

export const WeatherInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  align-items: baseline;
`;

export const Temp = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Description = styled.div`
  text-transform: capitalize;
`;
