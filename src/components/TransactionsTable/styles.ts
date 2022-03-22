import styled from "styled-components";

export const Container = styled.div`
  margin: 5.2rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  table {
    width: 100%;
    border-spacing: 0rem 0.5rem;
    font-family: "Poppins", sans-serif;
    font-weight: 400;

    th {
      color: var(--text-body);
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
    td {
      padding: 1rem 2rem;
      background-color: var(--shape);
      &:not(:first-child) {
        color: var(--text-body);
      }

      border-radius: 0.25rem;

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
