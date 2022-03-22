import styled from "styled-components";
import { Button } from "./components/Button";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Hello World</h1>
      <Button />
    </div>
  );
}
