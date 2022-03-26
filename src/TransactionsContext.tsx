import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";

interface ITransactions {
  id: string;
  title: string;
  amount: number;
  category: string;
  type: "deposit" | "withdraw";
  created_at: Date;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<ITransactions[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}
