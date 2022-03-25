import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  gap: 1rem;
  input {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    padding-left: 1.5rem;
    border-color: #d7d7d7;
    background-color: #e7e9ee;
    border: 0.06rem solid #d7d7d7;
    ::placeholder {
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      line-height: 1.5rem;
      font-size: 1rem;
      color: var(--text-body);
    }
  }

  .TransactionType {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    /* margin: 1rem 0; */
    button {
    }
  }

  button[type="submit"] {
    margin-top: 0.5rem;
    margin-left: auto;
    margin-right: auto;
    padding: 1.25rem 12.3rem;
    border-radius: 0.3rem;
    background-color: var(--green);
    border: 0;
    color: var(--shape);
    font-size: 1rem;
    line-height: 1.5rem;
    width: 50%;
    display: flex;
    justify-content: center;

    transition: filter 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33CC95",
  red: "#e52e4d",
};

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-radius: 0.25rem;
  border: 0.06rem solid #d7d7d7;

  span {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};

  gap: 1rem;

  transition: border-color 0.2s;

  :hover {
    border-color: ${darken(0.2, "#d7d7d7")};
  }
`;
