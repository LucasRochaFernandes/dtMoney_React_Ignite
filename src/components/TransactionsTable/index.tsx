import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface ITransactions {
  id: string;
  title: string;
  amount: number;
  category: string;
  type: "deposit" | "withdraw";
  created_at: Date;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);


  useEffect(() => {
    api
      .get("transactions")
      .then((res) => res.data)
      .then((data) => setTransactions(data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type === "withdraw"
                    ? `- ${new Intl.NumberFormat("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      }).format(transaction.amount)}`
                    : new Intl.NumberFormat("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.created_at}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
