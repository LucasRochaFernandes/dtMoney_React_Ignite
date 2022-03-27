import Modal from "react-modal";
import { Container, RadioBox } from "./styles";
import { FormEvent, useState, useContext } from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";

import outcomeImg from "../../assets/Saídas.svg";
import closeImg from "../../assets/Close.svg";
import incomeImg from "../../assets/Entradas.svg";

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: INewTransactionModalProps) {
  const transactions = useContext(TransactionsContext);
  console.log(transactions);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState<"withdraw" | "deposit" | "">("");

  const { createTransaction } = useContext(TransactionsContext);

  async function handleCreateNewTransaction(event: FormEvent): Promise<void> {
    event.preventDefault();

    if (type === "") {
      window.alert("Defina o tipo da transação");
      return;
    }

    await createTransaction({
      title,
      amount: value,
      category,
      type,
    });

    setTitle("");
    setCategory("");
    setType("");
    setValue(0);

    onRequestClose();
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
