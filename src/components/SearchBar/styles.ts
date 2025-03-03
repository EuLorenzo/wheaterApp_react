import styled from "styled-components";

export const Container = styled.header`
  width: calc(100% - 20px);
  display: flex;
  margin: 0px 10px 0px 10px;
`;

export const Form = styled.form`
  width: 100%;

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
    border-bottom: 1px solid #286b96;

    input {
      width: 100%;
      height: 100px;
      background-color: #3083b6;
      font-size: 3.2em;
      color: white;
      border: none;
      font-weight: 600;
      padding-left: 15px;
    }

    input:focus {
      outline: none;
    }

    .react-icon {
      transition: color 0.5s ease;
    }
  }
`;
