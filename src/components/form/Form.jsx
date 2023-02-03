import React, { useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import Input from "../UI/Input";

const ADD_SYMBOL = "+";
const SUBTRUCT_SYMBOL = "-";
const DIVIDE_SYMBOL = "/";
const MULTIPLY_SYMBOL = "*";

const Form = ({ addNewOperation, currentHistory, setCurrentHistory }) => {
  const [inpValue, setInpValue] = useState("");
  const [memory, setMemory] = useState([]);

  const calculate = (symbol) => {
    const obj = {
      id: Date.now().toString(),
      value: inpValue,
      symbol,
    };
    addNewOperation(obj);
    setInpValue("");
  };

  const previousHandler = () => {
    const deleteItem = currentHistory.pop();
    setMemory((prev) => [...prev, deleteItem]);
    setCurrentHistory((prev) =>
      prev.filter((item) => item.id !== deleteItem.id)
    );
  };

  const nextHandler = () => {
    setCurrentHistory([...currentHistory, memory[memory.length - 1]]);
    setMemory((prev) =>
      prev.filter((item) => item.id !== memory[memory.length - 1].id)
    );
  };

  return (
    <StyledForm>
      <Input
        type="text"
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
      />
      <div>
        <Button disabled={!currentHistory.length} onClick={previousHandler}>Previous</Button>
        <Button disabled={!inpValue} onClick={() => calculate(ADD_SYMBOL)}>
          +
        </Button>
        <Button disabled={!inpValue} onClick={() => calculate(SUBTRUCT_SYMBOL)}>
          -
        </Button>
        <Button disabled={!inpValue} onClick={() => calculate(MULTIPLY_SYMBOL)}>
          *
        </Button>
        <Button disabled={!inpValue} onClick={() => calculate(DIVIDE_SYMBOL)}>
          /
        </Button>
        <Button disabled={!memory.length} onClick={nextHandler}>Next</Button>
      </div>
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.div`
  margin: 50px auto;
  width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
