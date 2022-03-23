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
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Container>
        <form action="">
          <h1>Cadastrar transação</h1>
          <input type="text" placeholder="Nome" alt="Transaction name" />
          <input type="text" placeholder="Preço" alt="Transaction price" />
          <div className="TransactionType">
            <input
              type="button"
              placeholder="Entrada"
              alt="Transaction income"
            />
            <input
              type="button"
              placeholder="Saída"
              alt="Transaction outcome"
            />
          </div>
          <input type="text" placeholder="Preço" alt="Transaction price" />
          <button type="submit">Cadastrar</button>
        </form>
      </Container>
    </Modal>
  );
}
