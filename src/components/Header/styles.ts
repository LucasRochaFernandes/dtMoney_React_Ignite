import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  padding: 2.25rem 1rem 10rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #ffffff;
    background: var(--blue-light);
    border: 0;

    padding: 0.1rem 2rem;
    border-radius: 0.6rem;
    height: 3rem;

    transition: filter 0.2s;

    :hover {
      filter: brightness(0.7);
    }
  }
`;
