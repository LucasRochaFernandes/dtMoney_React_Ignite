import Modal from "react-modal";
import { Container, RadioBox } from "./styles";
import incomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saídas.svg";
import closeImg from "../../assets/Close.svg";
import { useState } from "react";

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: INewTransactionModalProps) {
  const [type, setType] = useState("");

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
      <Container>
        <h1>Cadastrar transação</h1>
        <input type="text" placeholder="Nome" alt="Transaction name" />
        <input type="number" placeholder="Valor" alt="Transaction value" />
        <div className="TransactionType">
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </div>
        <input type="text" placeholder="Categoria" alt="Transaction price" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
