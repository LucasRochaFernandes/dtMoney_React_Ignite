import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";

export function App() {
  const [newTransactionModalIsOpen, setNewTransactionmodalIsOpen] =
    useState<boolean>(false);

  function handleOpenNewTransactionModal() {
    setNewTransactionmodalIsOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setNewTransactionmodalIsOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={newTransactionModalIsOpen}
        onRequestClose={() => handleCloseNewTransactionModal()}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
