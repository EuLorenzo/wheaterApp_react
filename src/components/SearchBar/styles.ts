import styled from "styled-components";

export const Container = styled.header`
  width: calc(100% - 20px);
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  margin: 10px 10px 0px 10px;
`;

export const Form = styled.form`
  width: 100%;

  input {
    width: 100%;
    height: 100px;
    background-color: #3083b6;
    font-size: 3.2em;
    border: none;
    border-bottom: 1px solid #286b96;
    color: white;
    font-weight: 600;
  }

  input:focus {
    outline: none;
  }
`;
