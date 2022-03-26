import incomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saídas.svg";
import totalImg from "../../assets/Total.svg";
import { useContext } from "react";

import { Container } from "./styles";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const transactions = useContext(TransactionsContext);
  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 17.400,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- R$ 7.400,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 10.000,00</strong>
      </div>
    </Container>
  );
}
