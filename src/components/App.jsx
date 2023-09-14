import styled from "styled-components";
import { Container } from "../assets/styles/Container";
import Header from "./ui/Header";
import Main from "./ui/Main";
import Loader from "./widgets/Loader";

function App() {
  return (
    <>
      <Loader/>
      <Header/>
      <Main/>
    </>
  );
}

export default App;
