import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Main = ({ currentHistory }) => {
  const [history, setHistory] = useState("");

  useEffect(() => {
    let str = "";

    currentHistory.forEach((item) => {
      str += ` ${item.symbol} ${item.value}`;
    });

    setHistory(str);
  }, [currentHistory]);

  const total = eval(history);

  return (
    <StyledMain>
      <p>{history}</p>
      <p>Result: {total}</p>
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.div`
  margin: 0 auto;
  width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  font-size: 24px;
  font-weight: bold;
  color: #351c75;
`;
