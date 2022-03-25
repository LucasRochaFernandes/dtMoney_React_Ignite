import Modal from "react-modal";
import { Container, RadioBox } from "./styles";
import incomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saídas.svg";
import closeImg from "../../assets/Close.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface ITransactions {
  id: string;
  title: string;
  amount: number;
  category: string;
  type: "deposit" | "withdraw" | "";
  created_at: Date;
}
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: INewTransactionModalProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(0);
  const [id, setId] = useState(3);

  const [type, setType] = useState<"withdraw" | "deposit" | "">("");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data: ITransactions = {
      title,
      created_at: new Date(),
      category,
      amount: value,
      type,
      id: String(id),
    };
    setId(id + 1);

    api.post("transactions", data).then(() => {
      window.alert("Transaction create");
    });
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="React-Modal-Overlay"
      className="React-Modal"
    >
      <button type="button" onClick={onRequestClose} className="close-modal">
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h1>Cadastrar transação</h1>
        <input
          type="text"
          placeholder="Título"
          alt="Transaction name"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          alt="Transaction value"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
        <div className="TransactionType">
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </div>
        <input
          type="text"
          placeholder="Categoria"
          alt="Transaction price"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
