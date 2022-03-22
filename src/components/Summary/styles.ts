import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -6.8rem;

  div {
    background-color: var(--shape);
    padding: 1.5rem 1.25rem 1.1rem 2rem;
    border-radius: 0.3rem;
    :last-child {
      background: var(--green);
      color: var(--shape);
    }

    display: flex;
    flex-direction: column;
    color: var(--title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.6rem;
      p {
        font-size: 1rem;
      }
    }

    strong {
      display: block;
      font-size: 2.25rem;
      line-height: 3.3rem;
      font-weight: 500;
    }
  }
`;
