import React, { useContext, useState } from "react";
import styled from "styled-components";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { Context } from "./Context";

const App = () => {
  const { theme } = useContext(Context);

  const [currentHistory, setCurrentHistory] = useState([
    { symbol: "", value: "0" },
  ]);

  const addNewOperation = (obj) => {
    setCurrentHistory([...currentHistory, obj]);
  };

  
  return (
    <Container style={{backgroundColor: `${theme ? "#111111" : "#fce5cd"}`}}>
      <Header style={{backgroundColor: `${theme ? "#15151d" : "#fce5cd"}`}}/>
      <Form
        addNewOperation={addNewOperation}
        currentHistory={currentHistory}
        setCurrentHistory={setCurrentHistory}
        />
      <Main currentHistory={currentHistory} />
    </Container>
  );
};

export default App;

const Container = styled.div`
height: 100vh;
`
