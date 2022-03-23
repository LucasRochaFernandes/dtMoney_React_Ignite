import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
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
  }

  button {
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
  }
`;
