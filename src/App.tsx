import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useEffect, useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { api } from "./services/api";

Modal.setAppElement("#root");

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
      <NewTransactionModal
        isOpen={newTransactionModalIsOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}
