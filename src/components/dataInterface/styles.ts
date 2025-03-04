import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1000px;
  margin: auto;

  h1 {
    text-align: center;
    text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const ExtraInfos = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  gap: 50px;

  div {
    border-radius: 8px;
    border: 2px solid #fff;
    width: 100px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);

    h2 {
      text-align: center;
      font-size: 15px;
    }
  }
`;

export const MainInfos = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 600;

  span {
    text-transform: capitalize;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 105px;

    p {
      font-size: 20px;
    }
  }
`;
