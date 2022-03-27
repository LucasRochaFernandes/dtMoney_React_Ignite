import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";

interface ITransactions {
  id: string;
  title: string;
  amount: number;
  category: string;
  type: "deposit" | "withdraw" | "";
  created_at: Date;
}

type TransactionsInputType = Omit<ITransactions, "id" | "created_at">;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: ITransactions[];
  createTransaction: (transaction: TransactionsInputType) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  async function createTransaction(
    transaction: TransactionsInputType
  ): Promise<void> {
    const response = await api.post("transactions", transaction);
    setTransactions([...transactions, response.data.transactions]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
