import Modal from "react-modal";
import { Container } from "./styles";

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: INewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="React-Modal-Overlay"
      className="React-Modal"
    >
      <Container>
        <h1>Cadastrar transação</h1>
        <input type="text" placeholder="Nome" alt="Transaction name" />
        <input type="number" placeholder="Preço" alt="Transaction price" />
        <div className="TransactionType">
          <input type="button" placeholder="Entrada" alt="Transaction income" />
          <input type="button" placeholder="Saída" alt="Transaction outcome" />
        </div>
        <input type="text" placeholder="Categoria" alt="Transaction price" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
